import { Injectable, Inject } from '@angular/core';
import { CASTE_AUTH_CONFIG, DEFAULT_CONFIG, CasteAuthConfig } from '../caste-auth.config';
import { HttpClient } from '@angular/common/http';
import { CasteCrudBase } from '../base.crud.service';
import { User } from '../entities';

@Injectable({
  providedIn: 'root',
})
export class CasteUsersService extends CasteCrudBase<User, User> {
  protected endpoint = 'users';
  constructor(@Inject(CASTE_AUTH_CONFIG) config: CasteAuthConfig, http: HttpClient) {
    super({ ...DEFAULT_CONFIG, ...config }, http);
  }
}
