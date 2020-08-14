import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationResponse } from '../interfaces/application_response.interface';
import { ApplicationData } from '../interfaces/application_data.interface';
import { CasteCrudBase } from '../base.crud.service';
import {
  CASTE_AUTH_CONFIG,
  DEFAULT_CONFIG,
  CasteAuthConfig,
} from '../caste-auth.config';

@Injectable({
  providedIn: 'root',
})
export class CasteApplicationService extends CasteCrudBase<
  ApplicationData,
  ApplicationResponse
> {
  protected endpoint = 'applications';
  constructor(
    @Inject(CASTE_AUTH_CONFIG) config: CasteAuthConfig,
    http: HttpClient
  ) {
    super({ ...DEFAULT_CONFIG, ...config }, http);
  }
}
