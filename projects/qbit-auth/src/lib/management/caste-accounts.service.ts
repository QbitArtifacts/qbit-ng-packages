import { Injectable, Inject } from '@angular/core';
import {
  QBIT_AUTH_CONFIG,
  QbitAuthConfig,
  DEFAULT_CONFIG,
} from '../qbit-auth.config';
import { HttpClient } from '@angular/common/http';
import { AccountResponse } from '../interfaces/account_response.interface';
import { CasteCrudBase } from '../base.crud.service';

@Injectable({
  providedIn: 'root',
})
export class CasteAccountsService extends CasteCrudBase<
  Account,
  AccountResponse
> {
  public endpoint = 'accounts';
  constructor(
    @Inject(QBIT_AUTH_CONFIG) config: QbitAuthConfig,
    http: HttpClient
  ) {
    super({ ...DEFAULT_CONFIG, ...config }, http);
  }
}
