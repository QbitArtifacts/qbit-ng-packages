import { Injectable, Inject } from '@angular/core';
import {
  CASTE_AUTH_CONFIG,
  DEFAULT_CONFIG,
  CasteAuthConfig,
} from '../caste-auth.config';
import { HttpClient } from '@angular/common/http';
import { Permission } from '../interfaces/permission.interface';
import { PermissionResponse } from '../interfaces/permission_response.interface';
import { CasteCrudBase } from '../base.crud.service';

@Injectable({
  providedIn: 'root',
})
export class CastePermissionsService extends CasteCrudBase<
  Permission,
  PermissionResponse
> {
  protected endpoint = 'permissions';

  constructor(
    @Inject(CASTE_AUTH_CONFIG) config: CasteAuthConfig,
    http: HttpClient
  ) {
    super({ ...DEFAULT_CONFIG, ...config }, http);
  }
}
