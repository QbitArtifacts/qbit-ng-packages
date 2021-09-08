import { Injectable } from '@angular/core';
import { Application } from '../entities/application.entity';
import { User } from '../entities/user.entity';
import { Role } from '../entities/role.entity';
import { Account } from '../entities/account.entity';
import { LoginResponse } from '../interfaces/login_response.interface';
import { castRoles, ROLES } from '../roles';
import { Grants } from '../grants';

@Injectable({
  providedIn: 'root',
})
export class CasteUserService {
  public user: User;
  public selectedAccount: Account;
  public application: Application;

  public setUser(user: User) {
    this.user = user;
  }

  /* istanbul ignore next */
  public setUserFromTokenData(tokenData: LoginResponse) {
    const castedRoles: Role[] = castRoles(tokenData.roles);

    const user = new User()
      .fromJson({ username: tokenData.username, id: tokenData.id })
      .setRoles(castedRoles)
      .setPermissions(tokenData.permissions)
      .setAccountsFromPermissions(tokenData.permissions);

    this.setUser(user);
    this.setSelectedAccount(user.accounts[0]);
  }

  public setSelectedAccount(account: Account) {
    this.selectedAccount = account;
  }

  public setApplication(app) {
    this.application = app;
  }

  /* istanbul ignore next */
  public getAccountId(): string {
    return this.selectedAccount && this.selectedAccount.id;
  }

  public isAdmin() {
    return this.hasRole(ROLES.Admin);
  }

  public isSuperadmin() {
    return this.hasRole(ROLES.Superadmin);
  }

  public isSupport() {
    return this.hasRole(ROLES.Support);
  }

  public hasRole(role: Role): boolean {
    return this.user && this.user.hasRole(role);
  }

  public isManagerForAccount(accountId: string): boolean {
    return this.user && this.user.hasPermissionForAccount(accountId, Grants.MANAGER);
  }

  public isTrader() {
    return this.isGrantedInAccount(this.selectedAccount, Grants.TRADER);
  }

  public isInvestor() {
    return this.isGrantedInAccount(this.selectedAccount, Grants.INVESTOR);
  }

  public isPro() {
    return this.isGrantedInAccount(this.selectedAccount, Grants.PRO);
  }

  public isGrantedInAccount(account: Account, grant): boolean {
    if (!account) return false;
    return this.user && this.user.hasPermissionForAccount(account.id, grant);
  }

  public hasUser(): boolean {
    return !!this.user;
  }
}
