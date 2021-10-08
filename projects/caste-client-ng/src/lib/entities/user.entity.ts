import { Role } from './role.entity';
import { Application } from './application.entity';
import { Account } from './account.entity';
import { IBaseEntity } from './base.entity';
import { Permission } from './permission.entity';
import { getHighestRole } from '../roles';

export interface IUser extends IBaseEntity {
  username: string;
  roles?: Role[];
  permissions?: Permission[];
  applications?: Application[];
  application?: Application;
  accounts?: Account[];
  data?: any;
}

export class User implements IUser {
  username: string;
  roles: Role[];
  permissions: Permission[];
  applications: Application[];
  application: Application;
  accounts: Account[];
  id: string;
  iri: string;
  created_at: string;
  updated_at: string;
  data?: any;

  public hasRole(role: Role | string): boolean {
    if (role instanceof Role) {
      return this.roles.includes(role);
    }

    return this.roles.find((r) => r.name === role) !== undefined;
  }

  public addRole(role: Role) {
    this.roles.push(role);

    return this;
  }

  public setRoles(roles: Role[]) {
    this.roles = roles;

    return this;
  }

  public getRoles(): Role[] {
    return this.roles;
  }

  /* istanbul ignore next */
  public setPermissions(permissions: any[]) {
    this.permissions = permissions;

    return this;
  }

  /* istanbul ignore next */
  public setAccounts(accounts: any[]) {
    this.accounts = accounts;
    return this;
  }

  /* istanbul ignore next */
  public setAccountsFromPermissions(permissions: any[]) {
    this.accounts = permissions.map((perm) => ({
      ...perm.account,
      grants: perm.grants,
    }));

    return this;
  }

  public getType() {
    const role = getHighestRole(this.roles);

    return role ? role.name.replace('ROLE_', '') : '...';
  }

  /* istanbul ignore next */
  public hasPermissionForAccount(account_id: string, grant: string) {
    if (!this.permissions) return false;
    
    const perm = this.permissions.find((el: any) => el.account.id === account_id);
    const grants = (perm && perm.grants) || [];
    return grants.includes(grant);
  }

  public fromJson(data: IUser): User {
    const user = new User();
    user.username = data.username;
    user.iri = data['@id'];
    user.id = data.id;
    user.created_at = data.created_at;
    user.updated_at = data.updated_at;
    user.roles = data.roles;
    user.permissions = data.permissions;
    user.accounts = data.accounts;
    user.application = data.application;
    user.applications = data.applications;
    user.data = data.data;
    return user;
  }
}
