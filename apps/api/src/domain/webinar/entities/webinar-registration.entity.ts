import { Email } from '@domain/lead/value-objects/email.vo';
import type { WebinarStatus } from '@shared/constants';

export interface WebinarRegistrationProps {
  id?: string;
  name: string;
  email: Email;
  webinarId?: string;
  status?: WebinarStatus;
  leadId?: string;
  createdAt?: Date;
}

export class WebinarRegistration {
  readonly id?: string;
  readonly name: string;
  readonly email: Email;
  readonly webinarId: string;
  readonly status: WebinarStatus;
  readonly leadId?: string;
  readonly createdAt?: Date;

  private constructor(props: WebinarRegistrationProps) {
    this.id = props.id;
    this.name = props.name;
    this.email = props.email;
    this.webinarId = props.webinarId ?? 'claude-code-2026';
    this.status = props.status ?? 'registered';
    this.leadId = props.leadId;
    this.createdAt = props.createdAt;
  }

  static create(props: WebinarRegistrationProps): WebinarRegistration {
    if (!props.name.trim()) {
      throw new Error('Le prenom est obligatoire');
    }
    return new WebinarRegistration(props);
  }
}
