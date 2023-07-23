const express = require('express');
const redis = require('redis');
const process = require('process');

const SERVER_PORT =  8081;
const REDIS_PORT =  6379;

const app = express()
 
const client = redis.createClient({
    host: 'redis-server',
    port: 6379,
    
    // The above config dont work on docker-compose standalone
    // https://stackoverflow.com/questions/8754304/redis-connection-to-127-0-0-16379-failed-connect-econnrefused/68857073#68857073
    // Below will work on docker-compose standalone
    url: `redis://redis-server:${REDIS_PORT}`
});

client.connect();
client.set('visits', 0);

app.get('/', async (req, res) => {
    const visits = await client.get('visits');
    res.send('Number of visits is ' + visits ?? 0);
    client.set('visits', parseInt(visits) + 1);
});

// Exit with code 0 to test docker-compose restart policy
app.get('/exit-ok', () => process.exit(0));

// Exit with code 1 to test docker-compose restart policy
app.get('/exit-failure', () => process.exit(1));

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${SERVER_PORT}`);
});
