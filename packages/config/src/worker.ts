import { z } from 'zod';
import { withRedis } from './base.js';

export const workerEnv = withRedis
  .extend({
    ANTHROPIC_API_KEY: z.string().min(1),
    CONCURRENCY: z.coerce.number().int().positive().default(2),
    MODE_DIR: z.string().min(1).default('./modes'),
  })
  .parse(process.env);
