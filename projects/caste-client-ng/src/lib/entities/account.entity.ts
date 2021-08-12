import { AccountPermission } from './account-permission.entity';
import { Application } from './application.entity';
import { IBaseEntity } from './base.entity';

export interface IAccount extends IBaseEntity {
  permissions?: string[];
  messages: string[];
  name: string;
  enabled: boolean;
  application: Application | string;
}

export class Account implements IAccount {
  id?: string;
  iri?: string;
  created_at?: string;
  updated_at?: string;

  name: string;
  enabled: boolean;
  application: Application;
  permissions?: string[];
  messages: string[];


  static fromJson(obj: any): Account {
    const account = new Account();
    account.id = obj.id;
    account.iri = obj['@id'];
    account.name = obj.name;
    account.enabled = obj.enabled;
    account.messages = obj.messages;
    account.application = obj.application ? Application.fromJson(obj.application) : null;
    account.permissions =
      obj.permissions && obj.permissions.length ? obj.permissions.map((el) => AccountPermission.fromJson(el)) : [];
    account.updated_at = obj.updated_at;
    account.created_at = obj.created_at;
    return account;
  }
}
