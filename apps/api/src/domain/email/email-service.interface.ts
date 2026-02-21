export interface SubscribeToFormParams {
  email: string;
  name?: string;
  formId: string;
  tags?: string[];
}

export interface IEmailService {
  subscribeToForm(params: SubscribeToFormParams): Promise<void>;
}
