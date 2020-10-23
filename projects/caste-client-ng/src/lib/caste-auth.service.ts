import { Injectable, Inject } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { SignUpDataInterface } from './interfaces/signup_data.interface';
import { SignupResponse } from './interfaces/signup_response.interface';
import { LoginDataInterface } from './interfaces/login_data.interface';
import { LoginResponse } from './interfaces/login_response.interface';
import { mapJwtTokenAndAttach, decodeJwt } from './jwt/jwt-decode';
import { CASTE_AUTH_CONFIG, CasteAuthConfig, DEFAULT_CONFIG } from './caste-auth.config';

@Injectable({
  providedIn: 'root',
})
export class CasteAuthService extends BaseService {
  constructor(@Inject(CASTE_AUTH_CONFIG) config: CasteAuthConfig, http: HttpClient) {
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
    const tokenData = CasteAuthService.decodeToken(token);
    if (hasToken && tokenData) {
      const isExpired = CasteAuthService.isTokenExpired(tokenData);
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
    return this.http.post<SignupResponse>(
      `${this.opts.url}/public/users`,
      {
        realm: this.opts.realm,
        ...signupData,
      },
      {
        headers: this.opts.baseHeaders,
      },
    );
  }

  public signIn(loginData: LoginDataInterface) {
    return this.http
      .post<LoginResponse>(
        `${this.opts.url}/public/token`,
        {
          realm: this.opts.realm,
          ...loginData,
        },
        {
          headers: this.opts.baseHeaders,
        },
      )
      .pipe(mapJwtTokenAndAttach);
  }
}
