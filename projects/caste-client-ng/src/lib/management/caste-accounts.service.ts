import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CasteCrudBase } from '../base.crud.service';
import { CASTE_AUTH_CONFIG, DEFAULT_CONFIG, CasteAuthConfig } from '../caste-auth.config';
import { Account } from '../entities/account.entity';

@Injectable({
  providedIn: 'root',
})
export class CasteAccountsService extends CasteCrudBase<Account, Account> {
  protected endpoint = 'accounts';

  constructor(@Inject(CASTE_AUTH_CONFIG) config: CasteAuthConfig, http: HttpClient) {
    super({ ...DEFAULT_CONFIG, ...config }, http);
  }
}
