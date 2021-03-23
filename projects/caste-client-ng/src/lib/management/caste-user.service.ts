import { Injectable } from '@angular/core';
import { Application } from '../entities/application.entity';
import { User } from '../entities/user.entity';
import { Role } from '../entities/role.entity';
import { Account } from '../entities/account.entity';
import { LoginResponse } from '../interfaces/login_response.interface';
import { castRoles, ROLES } from '../roles';

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
    return this.user && this.user.hasRole(ROLES.Admin);
  }

  public isTrader() {
    return (
      this.user && this.selectedAccount && this.user.hasPermissionForAccount(this.selectedAccount.id, 'ACCOUNT_TRADER')
    );
  }

  public isInvestor() {
    return (
      this.user &&
      this.selectedAccount &&
      this.user.hasPermissionForAccount(this.selectedAccount.id, 'ACCOUNT_INVESTOR')
    );
  }

  public isManagerForAccount(accountId: string): boolean {
    return this.user && this.user.hasPermissionForAccount(accountId, 'ACCOUNT_MANAGER');
  }

  public hasUser(): boolean {
    return !!this.user;
  }
}
