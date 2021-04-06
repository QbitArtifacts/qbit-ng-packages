import { Inject, Injectable, InjectionToken } from '@angular/core';

export const QBIT_REQ_CACHE_MAX_AGE = new InjectionToken<number>('qbit.request-cache.max-age');

const ONE_SECOND = 60e3;

@Injectable()
export class RequestCacheService {
  private cache = new Map<string, RequestCacheEntry>();
  private maxAgeMs = ONE_SECOND;

  constructor(@Inject(QBIT_REQ_CACHE_MAX_AGE) maxAgeMs: number) {
    this.maxAgeMs = maxAgeMs;
  }

  setMaxAge(maxAge: number) {
    this.maxAgeMs = maxAge;
  }

  count() {
    return this.cache.size;
  }

  has(key: string): boolean {
    return !!this.cache.get(key);
  }

  get<T = any>(key): T {
    if (!this.has(key)) return null;

    const cached = this.cache.get(key);
    const isExpired = cached.birthday < Date.now() - this.maxAgeMs;

    if (isExpired) return null;

    return cached.data;
  }

  set<T = any>(key: string, data: T): void {
    const entry: RequestCacheEntry<T> = { key, data, birthday: Date.now() };
    this.cache.set(key, entry);
    this.updateCache();
  }

  remove(key: string) {
    this.cache.delete(key);
  }

  private updateCache() {
    const expiryDate = Date.now() - this.maxAgeMs;
    this.cache.forEach((entry) => {
      if (entry.birthday < expiryDate) {
        this.remove(entry.key);
      }
    });
  }
}

interface RequestCacheEntry<T = any> {
  key: string;
  data: T;
  birthday: number;
}
