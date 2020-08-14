import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountResponse } from '../interfaces/account_response.interface';
import { CasteCrudBase } from '../base.crud.service';
import {
  CASTE_AUTH_CONFIG,
  DEFAULT_CONFIG,
  CasteAuthConfig,
} from '../caste-auth.config';

@Injectable({
  providedIn: 'root',
})
export class CasteAccountsService extends CasteCrudBase<
  Account,
  AccountResponse
> {
  protected endpoint = 'accounts';
  constructor(
    @Inject(CASTE_AUTH_CONFIG) config: CasteAuthConfig,
    http: HttpClient
  ) {
    super({ ...DEFAULT_CONFIG, ...config }, http);
  }
}
