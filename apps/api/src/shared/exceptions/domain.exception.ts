export class DomainException extends Error {
  constructor(
    message: string,
    public readonly code: string,
  ) {
    super(message);
    this.name = 'DomainException';
  }
}

export class InvalidEmailException extends DomainException {
  constructor(email: string) {
    super(`Email invalide : ${email}`, 'INVALID_EMAIL');
  }
}

export class DuplicateLeadException extends DomainException {
  constructor(email: string) {
    super(`Un lead existe deja avec cet email : ${email}`, 'DUPLICATE_LEAD');
  }
}

export class DuplicateRegistrationException extends DomainException {
  constructor(email: string) {
    super(`Deja inscrit au webinaire : ${email}`, 'DUPLICATE_REGISTRATION');
  }
}
