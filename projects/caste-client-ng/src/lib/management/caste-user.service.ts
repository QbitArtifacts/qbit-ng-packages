import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  CASTE_AUTH_CONFIG,
  DEFAULT_CONFIG,
  CasteAuthConfig,
} from '../caste-auth.config';
import { BaseService } from '../base.service';
import { NewAccount } from '../interfaces/account.interface';
import { GivePermissions } from '../interfaces/give_permissions.interface';

/**
 * This service handles calls for authenticated user
 */
@Injectable({
  providedIn: 'root',
})
export class CasteUserService extends BaseService {
  constructor(
    @Inject(CASTE_AUTH_CONFIG) config: CasteAuthConfig,
    http: HttpClient
  ) {
    super(http, { ...DEFAULT_CONFIG, ...config });
  }

  public getToken(): string {
    return localStorage.getItem(this.opts.tokenStorageKey);
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
