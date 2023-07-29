const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000,

    // The above config dont work on docker-compose standalone
    // https://stackoverflow.com/questions/8754304/redis-connection-to-127-0-0-16379-failed-connect-econnrefused/68857073#68857073
    // Below will work on docker-compose standalone
    url: `redis://${keys.redisHost}:${keys.redisPort}`,
});

// Duplicate redis client for subscription
const sub = redisClient.duplicate();

// This is a slow function
// Purpusely made slow to test redis cache
function fib(index) {
    if (index < 2) return 1;
    return fib(index - 1) + fib(index - 2);
}

// Watch redis for new messages
sub.on('message', (channel, message) => {
    redisClient.hset('values', message, fib(parseInt(message)));
});

sub.subscribe('insert');