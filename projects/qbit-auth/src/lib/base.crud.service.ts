import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  QBIT_AUTH_CONFIG,
  QbitAuthConfig,
  DEFAULT_CONFIG,
} from './qbit-auth.config';
import { BaseService } from './base.service';

export abstract class CasteCrudBase<T, R> extends BaseService {
  public abstract endpoint: string;

  constructor(
    @Inject(QBIT_AUTH_CONFIG) config: QbitAuthConfig,
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
