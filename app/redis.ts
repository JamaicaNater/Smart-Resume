import RedisStore from 'connect-redis';
import { createClient } from 'redis';

const redisClient = createClient({
  url: 'redis://redis:6379',
  // pass: 'your-redis-password',
});

export const connectRedis = async () => {
  try {
    await redisClient.connect();
    console.log('Connected to Redis');
  } catch (error) {
    console.error('Failed to connect to Redis');
    console.error(error);
  }
};

const options = {
  client: redisClient,
  prefix: 'resume-api:',
  ttl: 3600, // Session expiration in seconds (1 hour)
  db: 0,
};

export const redisStore = new RedisStore(options);
