import type { PackType } from '@shared/constants';

export class SendMessageCommand {
  constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly message: string,
    public readonly company?: string,
    public readonly pack?: PackType,
  ) {}
}
