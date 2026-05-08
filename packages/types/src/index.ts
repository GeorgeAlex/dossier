declare const __memberUrn: unique symbol;
export type MemberUrn = string & { readonly [__memberUrn]: true };

export type Outcome = 'accepted' | 'replied' | 'meeting' | 'ghosted';

export interface Profile {
  memberUrn: MemberUrn;
  vanityUrl: string;
  name: string;
  title: string;
  headline: string;
  company: string;
  rawHtml?: string;
}

export interface ProfileAnalysis {
  profileMemberUrn: MemberUrn;
  roleRelevance: number;
  activitySignal: number;
  techAlignment: number;
  techSignals: string[];
  draftMessage: string;
  reasoning: string;
}

export interface JobPayload {
  memberUrn: MemberUrn;
  vanityUrl: string;
  runId: number;
}
