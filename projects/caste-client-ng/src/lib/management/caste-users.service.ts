import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CASTE_AUTH_CONFIG, DEFAULT_CONFIG, CasteAuthConfig } from '../caste-auth.config';
import { CasteCrudBase } from '../base.crud.service';
import { User } from '../entities';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map } from 'rxjs/internal/operators/map';
import { GivePermissions, NewAccount } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class CasteUsersService extends CasteCrudBase<User, User> {
  protected endpoint = 'users';
  constructor(@Inject(CASTE_AUTH_CONFIG) config: CasteAuthConfig, http: HttpClient) {
    super({ ...DEFAULT_CONFIG, ...config }, http);
  }

  public verifyEmail(userId: string, token: string) {
    return this.http.put(
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
    return this.http
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
    return this.http
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
