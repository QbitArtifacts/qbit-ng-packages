import { User } from './user.entity';
import { Account } from './account.entity';

export interface IAccountPermission {
  id?: string;
  name?: string;
  created_at?: string;
  updated_at?: string;
  account?: Account;
  grants?: string[];
  user?: User;
}

export class AccountPermission implements IAccountPermission {
  public id?: string;
  public name?: string;
  public created_at?: string;
  public updated_at?: string;
  public account?: Account;
  public grants?: string[];
  public user?: User;

  static fromJson(obj: any): AccountPermission {
    const account = new AccountPermission();
    account.id = obj.id;
    account.name = obj.name;
    account.account = obj.account;
    account.user = obj.user;
    account.grants = obj.grants;
    account.updated_at = obj.updated_at;
    account.created_at = obj.created_at;
    return account;
  }
}
