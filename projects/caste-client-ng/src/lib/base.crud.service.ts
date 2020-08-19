import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import {
  CASTE_AUTH_CONFIG,
  CasteAuthConfig,
  DEFAULT_CONFIG,
} from './caste-auth.config';

export abstract class CasteCrudBase<T, R> extends BaseService {
  public abstract endpoint: string;

  constructor(
    @Inject(CASTE_AUTH_CONFIG) config: CasteAuthConfig,
    http: HttpClient
  ) {
    super(http, { ...DEFAULT_CONFIG, ...config });
  }

  protected getToken(): string {
    return localStorage.getItem(this.opts.tokenStorageKey);
  }

  public create(data: T) {
    return this.post<R>(`/${this.endpoint}`, data);
  }

  public listAll() {
    return this.get<R[]>(`/${this.endpoint}`);
  }

  public getOne(id: string) {
    return this.get<R>(`/${this.endpoint}/${id}`);
  }

  public update(id: string, data: T) {
    return this.put<R>(`/${this.endpoint}/${id}`, data);
  }

  public remove(id: string) {
    return this.delete(`/${this.endpoint}/${id}`);
  }
}