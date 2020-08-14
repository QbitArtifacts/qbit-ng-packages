import { Permission } from './permission.interface';
import { Application } from './application.interface';

export interface User {
  username: string;
  roles: string[];
  application: string;
  permissions: Permission[];
  applications: Application[];
  id?: string;
  created_at?: string;
  updated_at?: string;
}
