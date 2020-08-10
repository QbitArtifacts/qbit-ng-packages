import { Application } from './application.interface';

export interface LoginResponseRaw {
  token: string;
}

export interface LoginResponse {
  exp: number;
  iat: number;
  roles: string[];
  token: string;
  username: string;
  application: Application;
  ip: string;
  permissions: any;
}
