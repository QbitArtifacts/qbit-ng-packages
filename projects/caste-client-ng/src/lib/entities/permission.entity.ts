import { Account } from './account.entity';
import { User } from './user.entity';
import { IBaseEntity } from './base.entity';

export interface IPermission extends IBaseEntity {
  user: User;
  account: Account;
  grants: string[];
}

export class Permission implements IPermission {
  id?: string;
  iri?: string;
  created_at?: string;
  updated_at?: string;
  
  user: User;
  account: Account;
  grants: string[];
}
