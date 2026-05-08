import { z } from 'zod';
import { withRedis } from './base.js';

export const cliEnv = withRedis
	.extend({
		LINKEDIN_EMAIL: z.string().email(),
		LINKEDIN_PASSWORD: z.string().min(1),
		PLAYWRIGHT_HEADLESS: z
			.string()
			.transform((v) => v !== 'false')
			.default('true'),
		VIEW_BUDGET: z.coerce.number().int().positive().default(25),
		SEARCH_LIMIT: z.coerce.number().int().positive().default(100),
	})
	.parse(process.env);
