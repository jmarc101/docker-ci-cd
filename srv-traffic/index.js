const express = require('express')
const redis = require('redis')

const PORT =  9002;

const app = express()

const client = redis.createClient({
    // This is the name of the service in the docker-compose.yml file
    // We have access because we are in the same network because of the docker-compose.yml file
    host: 'redis-server',

    // This is the default port for redis
    port: 9001
});


client.on('error', err => console.log('Redis Client Error', err));

client.connect();
client.set('visits', 0);

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send('Number of visits is ' + visits);
        client.set('visite', parseInt(visits) + 1);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
