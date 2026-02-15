import type { Lead } from '../entities/lead.entity';

export interface ILeadRepository {
  findByEmail(email: string): Promise<Lead | null>;
  save(lead: Lead): Promise<Lead>;
}
