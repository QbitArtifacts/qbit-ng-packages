export interface LoginResponseRaw {
  token: string;
}

export interface LoginResponse {
  exp: number;
  iat: number;
  roles: string[];
  token: string;
  username: string;
}
