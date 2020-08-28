import { Permission } from './permission.interface';
import { Application } from './application.interface';

export interface UserResponse {
  username: string;
  roles: string[];
  application: Application;
  permissions: Permission[];
  applications: Application[];
  id?: string;
  created_at?: string;
  updated_at?: string;
}
