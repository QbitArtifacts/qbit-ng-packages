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
import { mapJwtTokenAndAttach, decodeJwt } from './jwt/jwt-decode';

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

  static decodeToken(token: string): LoginResponse {
    return decodeJwt(token);
  }

  static isTokenExpired(tokenData: LoginResponse) {
    const now = Date.now();
    const expSeconds = tokenData.exp * 1000;
    const diff = expSeconds - now;
    return diff <= 0;
  }

  static isTokenValid(token: string): boolean {
    const hasToken = token !== null;
    const tokenData = QbitAuthService.decodeToken(token);
    if (hasToken && tokenData) {
      const isExpired = QbitAuthService.isTokenExpired(tokenData);
      return !isExpired;
    }

    return false;
  }

  public getToken(): string {
    return localStorage.getItem(this.opts.tokenStorageKey);
  }

  public saveToken(token: string) {
    localStorage.setItem(this.opts.tokenStorageKey, token);
  }

  public signUp(signupData: SignUpDataInterface) {
    return this.post<SignupResponse>('/app/sign_up', {
      realm: this.opts.realm,
      ...signupData,
    });
  }

  public signIn(loginData: LoginDataInterface) {
    return this.post<LoginResponse>('/app/token', {
      realm: this.opts.realm,
      ...loginData,
    }).pipe(mapJwtTokenAndAttach);
  }
}
