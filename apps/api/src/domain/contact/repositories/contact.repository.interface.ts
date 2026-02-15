import type { ContactMessage } from '../entities/contact-message.entity';

export interface IContactRepository {
  save(message: ContactMessage): Promise<ContactMessage>;
}
