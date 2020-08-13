import { Injectable, Inject } from '@angular/core';
import {
  QBIT_AUTH_CONFIG,
  QbitAuthConfig,
  DEFAULT_CONFIG,
} from '../qbit-auth.config';
import { HttpClient } from '@angular/common/http';
import { CasteCrudBase } from '../base.crud.service';
import { User } from '../interfaces/user.interface';
import { UserResponse } from '../interfaces/user_response.interface';

@Injectable({
  providedIn: 'root',
})
export class CasteUsersService extends CasteCrudBase<
  User,
  UserResponse
> {
  public endpoint = 'users';
  constructor(
    @Inject(QBIT_AUTH_CONFIG) config: QbitAuthConfig,
    http: HttpClient
  ) {
    super({ ...DEFAULT_CONFIG, ...config }, http);
  }
}
