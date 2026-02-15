import type { LeadSource, PackType } from '@shared/constants';

export class CreateLeadCommand {
  constructor(
    public readonly email: string,
    public readonly source: LeadSource,
    public readonly name?: string,
    public readonly company?: string,
    public readonly pack?: PackType,
  ) {}
}
