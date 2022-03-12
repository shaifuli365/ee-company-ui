export interface AuthResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  session_state: string;
  token_type: string;
}
