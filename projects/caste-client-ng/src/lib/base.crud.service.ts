import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import {
  CASTE_AUTH_CONFIG,
  CasteAuthConfig,
  DEFAULT_CONFIG,
} from './caste-auth.config';
import { UserType } from './types';

export abstract class CasteCrudBase<T, R> extends BaseService {
  protected abstract endpoint: string;

  constructor(
    @Inject(CASTE_AUTH_CONFIG) config: CasteAuthConfig,
    http: HttpClient
  ) {
    super(http, { ...DEFAULT_CONFIG, ...config });
  }

  protected getToken(): string {
    const token = localStorage.getItem(this.opts.tokenStorageKey);
    return token;
  }

  public create(data: T, userType: UserType = 'user') {
    return this.post<R>(`/${userType}/${this.endpoint}`, data);
  }

  public listAll(
    params?: { [key: string]: string },
    userType: UserType = 'user'
  ) {
    return this.get<R[]>(`/${userType}/${this.endpoint}`, params);
  }

  public getOne(id: string, userType: UserType = 'user') {
    return this.get<R>(`/${userType}/${this.endpoint}/${id}`);
  }

  public update(id: string, data: T, userType: UserType = 'user') {
    return this.put<R>(`/${userType}/${this.endpoint}/${id}`, data);
  }

  public remove(id: string, userType: UserType = 'user') {
    return this.delete(`/${userType}/${this.endpoint}/${id}`);
  }
}
