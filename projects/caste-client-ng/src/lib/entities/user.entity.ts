import { Application } from './application.entity';
import { IBaseEntity } from './base.entity';
import { Permission } from './permission.entity';

export interface IUser extends IBaseEntity {
  username: string;
  roles: string[];
  application: string;
  permissions: Permission[];
  applications: Application[];
}

export class User implements IUser {
  username: string;
  roles: string[];
  application: string;
  permissions: any[];
  applications: any[];
  id: string;
  iri: string;
  created_atid: string;
  updated_atid: string;
}
