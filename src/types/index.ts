export interface User {
  id: string;
  name: string;
  email: string;
  profilePicture?: string;
}

export interface Symptom {
  description: string;
  severity: 'mild' | 'moderate' | 'severe';
}

export interface SymptomLog {
  id: string;
  symptoms: Symptom[];
  aiAdvice: string;
  createdAt: string;
  userId: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface AuthError {
  message: string;
  errors?: Record<string, string>;
}

export interface ProfileUpdate {
  name?: string;
  email?: string;
  currentPassword?: string;
  newPassword?: string;
  profilePicture?: string;
}

export interface ApiError {
  message: string;
  status?: number;
  details?: unknown;
}

export interface GeminiResponse {
  candidates: {
    content: {
      parts: {
        text: string;
      }[];
    };
  }[];
}

export interface Pagination {
  page: number;
  limit: number;
  totalPages: number;
  totalCount: number;
}

export interface SymptomHistoryResponse {
  history: SymptomLog[];
  pagination: Pagination;
}

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export interface SubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export interface AuthCardProps {
  title: string;
  children: React.ReactNode;
}

export interface ErrorMessageProps {
  title: string;
  message: string;
  showHomeLink?: boolean;
}

export interface ProfileInfoProps {
  user: User;
}

export interface ProfileSettingsProps {
  user: User;
}

export interface SymptomCheckerProps {
  onCheckSymptoms: (symptoms: Symptom[]) => Promise<void>;
}

export interface SymptomHistoryProps {
  history: SymptomLog[];
  onDelete: (id: string) => Promise<void>;
  pagination: Pagination;
  onPageChange: (page: number) => void;
}
