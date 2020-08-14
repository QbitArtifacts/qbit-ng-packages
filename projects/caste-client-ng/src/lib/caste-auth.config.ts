import { InjectionToken } from '@angular/core';

export interface CasteAuthConfig {
  realm: string;
  url: string;
  baseHeaders?: { [key: string]: string };
  tokenStorageKey?: string;
}

export const CASTE_AUTH_CONFIG = new InjectionToken<CasteAuthConfig>(
  'app.config'
);
export const DEFAULT_CONFIG: any = {
  realm: 'default',
  url: 'https://api.caste.qbitartifacts.com',
  baseHeaders: {
    accept: 'application/json',
    'content-type': 'application/json',
  },
  tokenStorageKey: 'qbit:auth:token',
};
