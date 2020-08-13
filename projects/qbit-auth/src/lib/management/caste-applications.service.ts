import { Injectable, Inject } from '@angular/core';
import {
  QBIT_AUTH_CONFIG,
  QbitAuthConfig,
  DEFAULT_CONFIG,
} from '../qbit-auth.config';
import { HttpClient } from '@angular/common/http';
import { ApplicationResponse } from '../interfaces/applications_response.interface';
import { ApplicationData } from '../interfaces/application_data.interface';
import { CasteCrudBase } from '../base.crud.service';

@Injectable({
  providedIn: 'root',
})
export class CasteApplicationService extends CasteCrudBase<
  ApplicationData,
  ApplicationResponse
> {
  public endpoint = 'applications';
  constructor(
    @Inject(QBIT_AUTH_CONFIG) config: QbitAuthConfig,
    http: HttpClient
  ) {
    super({ ...DEFAULT_CONFIG, ...config }, http);
  }
}
