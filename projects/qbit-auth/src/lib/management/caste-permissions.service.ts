import { Injectable, Inject } from '@angular/core';
import {
  QBIT_AUTH_CONFIG,
  QbitAuthConfig,
  DEFAULT_CONFIG,
} from '../qbit-auth.config';
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
  public endpoint = 'permissions';

  constructor(
    @Inject(QBIT_AUTH_CONFIG) config: QbitAuthConfig,
    http: HttpClient
  ) {
    super({ ...DEFAULT_CONFIG, ...config }, http);
  }
}
