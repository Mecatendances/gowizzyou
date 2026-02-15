import { Email } from '../value-objects/email.vo';
import type { LeadSource, PackType } from '@shared/constants';

export interface LeadProps {
  id?: string;
  email: Email;
  name?: string;
  company?: string;
  source: LeadSource;
  pack?: PackType;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Lead {
  readonly id?: string;
  readonly email: Email;
  readonly name?: string;
  readonly company?: string;
  readonly source: LeadSource;
  readonly pack?: PackType;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;

  private constructor(props: LeadProps) {
    this.id = props.id;
    this.email = props.email;
    this.name = props.name;
    this.company = props.company;
    this.source = props.source;
    this.pack = props.pack;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  static create(props: LeadProps): Lead {
    return new Lead(props);
  }

  static fromPersistence(data: {
    id: string;
    email: string;
    name: string | null;
    company: string | null;
    source: string;
    pack: string | null;
    createdAt: Date;
    updatedAt: Date;
  }): Lead {
    return new Lead({
      id: data.id,
      email: Email.create(data.email),
      name: data.name ?? undefined,
      company: data.company ?? undefined,
      source: data.source as LeadSource,
      pack: (data.pack as PackType) ?? undefined,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    });
  }
}
