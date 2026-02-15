export class RegisterWebinarCommand {
  constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly webinarId?: string,
  ) {}
}
