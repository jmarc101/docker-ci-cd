const keys = require('./keys');
const redis = require('redis');
const express = require('express');
const bodyParser = require('body-parser');

// Express App Setup
const cors = require('cors');

// Create express app
const app = express();
// Allow cross-origin requests
app.use(cors());
// Parse incoming requests as json
app.use(bodyParser.json());

// Postgres Client Setup
// Pool is a connection pool
const { Pool } = require('pg');

// Create a new pool
const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort,
});

// Create a table called values if it does not exist
pgClient.on("connect", (client) => {
    client
      .query("CREATE TABLE IF NOT EXISTS values (number INT)")
      .catch(console.error("🚨🚨 Lost PG connection"));
});

// Redis Client Setup
const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000,

     // The above config dont work on docker-compose standalone
    // https://stackoverflow.com/questions/8754304/redis-connection-to-127-0-0-16379-failed-connect-econnrefused/68857073#68857073
    // Below will work on docker-compose standalone
    url: `redis://${keys.redisHost}:${keys.redisPort}`
});

// We need to duplicate redis client because when a client is listening or publishing,
// it cannot be used for other purposes
const redisPublisher = redisClient.duplicate();

app.get('/', (req, res) => {
    res.send('Hi');
});

// Get all values from postgres
app.get('/values/all', async (req, res) => {
    const values = await pgClient.query('SELECT * from values');

    // Send back all values
    res.send(values.rows);
});

// Get all values from redis
app.get('/values/current', async (req, res) => {
    // Get all hash values from redis
    redisClient.hgetall('values', (err, values) => {
        res.send(values);
    });
});

// Post a new value
app.post("/values", async (req, res) => {
    const index = req.body.index;

    // Cap the index at 40
    if (parseInt(index) > 40) {
        return res.status(422).send("Index too high");
    }

    // Set the value of index to nothing
    redisClient.hset("values", index, "Nothing yet!");
    // Publish insert event
    redisPublisher.publish("insert", index);
    // Insert index into postgres
    pgClient.query("INSERT INTO values(number) VALUES($1)", [index]);

    // Send back a 200 response
    res.send({ working: true });
});

// Listen on port 5000
app.listen(5000, err => {
    console.log("Listening on port 5000");
});
