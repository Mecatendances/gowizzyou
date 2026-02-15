import { InvalidEmailException } from '@shared/exceptions/domain.exception';

export class Email {
  private readonly value: string;

  private static readonly EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  private constructor(email: string) {
    this.value = email.toLowerCase().trim();
  }

  static create(email: string): Email {
    const trimmed = email?.trim().toLowerCase();
    if (!trimmed || !Email.EMAIL_REGEX.test(trimmed)) {
      throw new InvalidEmailException(email);
    }
    return new Email(trimmed);
  }

  toString(): string {
    return this.value;
  }

  equals(other: Email): boolean {
    return this.value === other.value;
  }
}
