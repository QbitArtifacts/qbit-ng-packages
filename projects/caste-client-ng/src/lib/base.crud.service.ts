import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import {
  CASTE_AUTH_CONFIG,
  CasteAuthConfig,
  DEFAULT_CONFIG,
} from './caste-auth.config';
import { CasteHttpClient } from './caste-http-client';

export abstract class CasteCrudBase<T, R> {
  protected abstract endpoint: string;
  private http: CasteHttpClient;
  private opts: CasteAuthConfig = DEFAULT_CONFIG;

  constructor(
    @Inject(CASTE_AUTH_CONFIG) config: CasteAuthConfig,
    http: HttpClient
  ) {
    this.opts = config;
    this.http = new CasteHttpClient(http, config);
  }

  protected getToken(): string {
    return localStorage.getItem(this.opts.tokenStorageKey);
  }

  public create(data: T) {
    return this.http.post<R>(`/${this.endpoint}`, data);
  }

  public listAll() {
    return this.http.get<R[]>(`/${this.endpoint}`);
  }

  public getOne(id: string) {
    return this.http.get<R>(`/${this.endpoint}/${id}`);
  }

  public update(id: string, data: T) {
    return this.http.put<R>(`/${this.endpoint}/${id}`, data);
  }

  public remove(id: string) {
    return this.http.delete(`/${this.endpoint}/${id}`);
  }
}
