import { z } from 'zod';

export const nodeEnv = z.enum(['development', 'test', 'production']).default('development');

export const baseSchema = z.object({
  DATABASE_URL: z.string().url(),
  NODE_ENV: nodeEnv,
});

export const withRedis = baseSchema.extend({
  REDIS_URL: z.string().url(),
});
