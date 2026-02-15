export const LEAD_SOURCES = ['website', 'webinar', 'contact', 'newsletter'] as const;
export type LeadSource = (typeof LEAD_SOURCES)[number];

export const PACK_TYPES = ['automatisation', 'app-metier', 'transformation', 'autre'] as const;
export type PackType = (typeof PACK_TYPES)[number];

export const CONTACT_STATUSES = ['new', 'read', 'replied', 'archived'] as const;
export type ContactStatus = (typeof CONTACT_STATUSES)[number];

export const WEBINAR_STATUSES = ['registered', 'attended', 'no-show'] as const;
export type WebinarStatus = (typeof WEBINAR_STATUSES)[number];

export const INJECTION_TOKENS = {
  LEAD_REPOSITORY: Symbol('ILeadRepository'),
  CONTACT_REPOSITORY: Symbol('IContactRepository'),
  WEBINAR_REPOSITORY: Symbol('IWebinarRepository'),
} as const;
