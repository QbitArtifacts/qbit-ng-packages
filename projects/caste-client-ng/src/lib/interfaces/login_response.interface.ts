import { IApplication } from '../entities/application.entity';

export interface LoginResponseRaw {
  token: string;
}

export interface LoginResponse {
  exp: number;
  iat: number;
  roles: string[];
  token: string;
  username: string;
  application: IApplication;
  ip: string;
  id: string;
  permissions: any;
}
