import { Email } from '@domain/lead/value-objects/email.vo';
import type { ContactStatus, PackType } from '@shared/constants';

export interface ContactMessageProps {
  id?: string;
  name: string;
  email: Email;
  company?: string;
  pack?: PackType;
  message: string;
  status?: ContactStatus;
  leadId?: string;
  createdAt?: Date;
}

export class ContactMessage {
  readonly id?: string;
  readonly name: string;
  readonly email: Email;
  readonly company?: string;
  readonly pack?: PackType;
  readonly message: string;
  readonly status: ContactStatus;
  readonly leadId?: string;
  readonly createdAt?: Date;

  private constructor(props: ContactMessageProps) {
    this.id = props.id;
    this.name = props.name;
    this.email = props.email;
    this.company = props.company;
    this.pack = props.pack;
    this.message = props.message;
    this.status = props.status ?? 'new';
    this.leadId = props.leadId;
    this.createdAt = props.createdAt;
  }

  static create(props: ContactMessageProps): ContactMessage {
    if (!props.name.trim()) {
      throw new Error('Le nom est obligatoire');
    }
    if (!props.message.trim()) {
      throw new Error('Le message est obligatoire');
    }
    return new ContactMessage(props);
  }
}
