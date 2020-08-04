import { Injectable, Inject } from '@angular/core';
import { BaseService } from './base.service';
import {
  QBIT_AUTH_CONFIG,
  QbitAuthConfig,
  DEFAULT_CONFIG,
} from './qbit-auth.config';
import { HttpClient } from '@angular/common/http';
import { SignUpDataInterface } from './interfaces/signup_data.interface';
import { SignupResponse } from './interfaces/signup_response.interface';
import { LoginDataInterface } from './interfaces/login_data.interface';
import { LoginResponse } from './interfaces/login_response.interface';
import { mapJwtTokenAndAttach } from './jwt/jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class QbitAuthService extends BaseService {
  constructor(
    @Inject(QBIT_AUTH_CONFIG) config: QbitAuthConfig,
    http: HttpClient
  ) {
    super(http, { ...DEFAULT_CONFIG, ...config });
  }

  protected getToken(): string {
    return localStorage.getItem('token');
  }

  public signUp(signupData: SignUpDataInterface) {
    return this.post<SignupResponse>('/app/sign_up', signupData);
  }

  public signIn(loginData: LoginDataInterface) {
    return this.post<LoginResponse>('/app/token', loginData).pipe(
      mapJwtTokenAndAttach
    );
  }
}
