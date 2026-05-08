import { integer, pgEnum, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const outcomeEnum = pgEnum('outcome', ['accepted', 'replied', 'meeting', 'ghosted']);

export const runStatusEnum = pgEnum('run_status', ['running', 'completed', 'failed']);

export const seenProfiles = pgTable('seen_profiles', {
	memberUrn: text('member_urn').primaryKey(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const profiles = pgTable('profiles', {
	id: serial('id').primaryKey(),
	memberUrn: text('member_urn').unique().notNull(),
	vanityUrl: text('vanity_url').notNull(),
	name: text('name').notNull(),
	title: text('title').notNull(),
	headline: text('headline').notNull(),
	company: text('company').notNull(),
	rawHtml: text('raw_html'),
	createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const profileAnalyses = pgTable('profile_analyses', {
	id: serial('id').primaryKey(),
	profileId: integer('profile_id')
		.references(() => profiles.id)
		.notNull(),
	roleRelevance: integer('role_relevance').notNull(),
	activitySignal: integer('activity_signal').notNull(),
	techAlignment: integer('tech_alignment').notNull(),
	techSignals: text('tech_signals').array().notNull(),
	draftMessage: text('draft_message').notNull(),
	reasoning: text('reasoning').notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const outcomes = pgTable('outcomes', {
	id: serial('id').primaryKey(),
	profileId: integer('profile_id')
		.references(() => profiles.id)
		.notNull(),
	value: outcomeEnum('value').notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const runs = pgTable('runs', {
	id: serial('id').primaryKey(),
	status: runStatusEnum('status').notNull().default('running'),
	profilesFound: integer('profiles_found').notNull().default(0),
	profilesVisited: integer('profiles_visited').notNull().default(0),
	profilesPassedClassifier: integer('profiles_passed_classifier').notNull().default(0),
	startedAt: timestamp('started_at').defaultNow().notNull(),
	finishedAt: timestamp('finished_at'),
});
