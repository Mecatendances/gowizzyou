import type { WebinarRegistration } from '../entities/webinar-registration.entity';

export interface IWebinarRepository {
  findByEmailAndWebinarId(email: string, webinarId: string): Promise<WebinarRegistration | null>;
  save(registration: WebinarRegistration): Promise<WebinarRegistration>;
}
