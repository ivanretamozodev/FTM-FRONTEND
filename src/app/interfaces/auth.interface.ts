export interface AuthResponse {
  name: string;
  id: string;
  role: string;
  token: string;
  success: boolean;
}

export interface User {
  name?: string;
  id?: string;
  role?: string;
}
