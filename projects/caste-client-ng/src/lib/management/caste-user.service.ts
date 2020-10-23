import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CASTE_AUTH_CONFIG, DEFAULT_CONFIG, CasteAuthConfig } from '../caste-auth.config';
import { BaseService } from '../base.service';
import { NewAccount } from '../interfaces/account.interface';
import { GivePermissions } from '../interfaces/give_permissions.interface';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map } from 'rxjs/internal/operators/map';

/**
 * This service handles calls for authenticated user
 */
@Injectable({
  providedIn: 'root',
})
export class CasteUserService extends BaseService {
  public httpClient: HttpClient;
  constructor(@Inject(CASTE_AUTH_CONFIG) config: CasteAuthConfig, http: HttpClient) {
    super(http, { ...DEFAULT_CONFIG, ...config });
    this.httpClient = http;
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
        { username },
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
        { code, password },
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
