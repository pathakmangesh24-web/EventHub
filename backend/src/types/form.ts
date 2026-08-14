// Form types and interfaces
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
  data?: ContactFormData;
  error?: string;
}

export interface ValidationError {
  field: string;
  message: string;
}
