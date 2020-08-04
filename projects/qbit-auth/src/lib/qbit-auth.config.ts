import { InjectionToken } from '@angular/core';

export interface QbitAuthConfig {
  realm: string;
  url: string;
  baseHeaders?: { [key: string]: string };
}

export const QBIT_AUTH_CONFIG = new InjectionToken<QbitAuthConfig>(
  'app.config'
);
export const DEFAULT_CONFIG: QbitAuthConfig = {
  realm: 'default',
  url: 'https://api.caste.qbitartifacts.com',
  baseHeaders: {
    accept: 'application/json',
    'content-type': 'application/json',
  },
};
