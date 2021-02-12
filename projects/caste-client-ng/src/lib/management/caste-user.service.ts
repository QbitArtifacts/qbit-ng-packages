import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CASTE_AUTH_CONFIG, DEFAULT_CONFIG, CasteAuthConfig } from '../caste-auth.config';
import { BaseService } from '../base.service';
import { GivePermissions } from '../interfaces/give_permissions.interface';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map } from 'rxjs/internal/operators/map';
import { Application } from '../entities/application.entity';
import { User } from '../entities/user.entity';
import { Role } from '../entities/role.entity';
import { Account } from '../entities/account.entity';
import { LoginResponse } from '../interfaces/login_response.interface';
import { castRoles, ROLES } from '../roles';
import { NewAccount } from '../interfaces/new_account.interface';

/**
 * This service handles calls for authenticated user
 */
@Injectable({
  providedIn: 'root',
})
export class CasteUserService extends BaseService {
  public httpClient: HttpClient;
  public user: User;
  public selectedAccount: Account;
  public application: Application;

  constructor(@Inject(CASTE_AUTH_CONFIG) config: CasteAuthConfig, http: HttpClient) {
    super(http, { ...DEFAULT_CONFIG, ...config });
    this.httpClient = http;
  }

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

  public getToken(): string {
    return localStorage.getItem(this.opts.tokenStorageKey);
  }

  public verifyEmail(userId: string, token: string) {
    return this.httpClient.put(
      `${this.opts.url}/public/users/${userId}/verify`,
      {
        realm: this.opts.realm,
        code: token,
      },
      {
        headers: this.opts.baseHeaders,
      },
    );
  }

  public requestPasswordRecovery(username: string) {
    return this.httpClient
      .post(
        `${this.opts.url}/public/users/recover`,
        { username, realm: this.opts.realm },
        {
          headers: this.opts.baseHeaders,
        },
      )
      .pipe(map(this.extractData), catchError(this.handleError.bind(this)));
  }

  public recoverPassword(userId: string, code: string, password: string) {
    return this.httpClient
      .put(
        `${this.opts.url}/public/users/${userId}/recover`,
        { code, password, realm: this.opts.realm },
        {
          headers: this.opts.baseHeaders,
        },
      )
      .pipe(map(this.extractData), catchError(this.handleError.bind(this)));
  }

  public createNewAccount(data: NewAccount) {
    return this.post<NewAccount>('/user/new_account', {
      realm: this.opts.realm,
      ...data,
    });
  }

  public givePermissionsToAccount(data: GivePermissions) {
    return this.post<GivePermissions>('/user/permissions', {
      realm: this.opts.realm,
      ...data,
    });
  }
}
