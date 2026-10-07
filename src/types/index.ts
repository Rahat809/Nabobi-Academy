export type PageRoute = '/' | '/course' | '/enroll';

export interface RegistrationFormData {
  fullName: string;
  phone: string;
  district: string;
  profession: string;
  course: string;
}

export interface FormErrors {
  fullName?: string;
  phone?: string;
  district?: string;
  profession?: string;
  course?: string;
}

export interface SubmittedRegistration extends RegistrationFormData {
  submittedAt: string;
  registrationId: string;
}
