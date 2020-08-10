import { Injectable, Inject } from '@angular/core';
import { BaseService } from './base.service';
import {
  QBIT_AUTH_CONFIG,
  QbitAuthConfig,
  DEFAULT_CONFIG,
} from './qbit-auth.config';
import { HttpClient } from '@angular/common/http';
import { ApplicationResponse } from './interfaces/applications_response.interface';
import { ApplicationData } from './interfaces/application_data.interface';

@Injectable({
  providedIn: 'root',
})
export class QbitManagementService extends BaseService {
  constructor(
    @Inject(QBIT_AUTH_CONFIG) config: QbitAuthConfig,
    http: HttpClient
  ) {
    super(http, { ...DEFAULT_CONFIG, ...config });
  }

  protected getToken(): string {
    return localStorage.getItem(this.opts.tokenStorageKey);
  }

  public createApplication(applicationData: ApplicationData) {
    return this.post<ApplicationResponse>(
      `/applications`,
      applicationData
    );
  }

  public getApplicationsList() {
    return this.get<ApplicationResponse[]>('/applications');
  }

  public getApplicationById(applicationId: string) {
    return this.get<ApplicationResponse>(
      `/applications/${applicationId}`
    );
  }
}
