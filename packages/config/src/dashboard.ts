import { z } from 'zod';
import { baseSchema } from './base.js';

export const dashboardEnv = baseSchema
  .extend({
    PORT: z.coerce.number().int().positive().default(3000),
    SESSION_SECRET: z.string().min(16),
  })
  .parse(process.env);
