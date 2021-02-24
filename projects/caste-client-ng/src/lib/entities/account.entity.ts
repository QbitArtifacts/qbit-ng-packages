import { AccountPermission } from './account-permission.entity';
import { Application } from './application.entity';
import { IBaseEntity } from './base.entity';

export interface IAccount extends IBaseEntity {
  permissions?: string[];
  name: string;
  application: Application;
}

export class Account implements IAccount {
  permissions?: string[];
  name: string;
  application: Application;
  id?: string;
  iri?: string;
  created_at?: string;
  updated_at?: string;

  static fromJson(obj: any): Account {
    const account = new Account();
    account.id = obj.id;
    account.name = obj.name;
    account.application = obj.application;
    account.permissions =
      obj.permissions && obj.permissions.length ? obj.permissions.map((el) => AccountPermission.fromJson(el)) : [];
    account.updated_at = obj.updated_at;
    account.created_at = obj.created_at;
    return account;
  }
}
