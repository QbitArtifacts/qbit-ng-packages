import { Injectable, Inject } from '@angular/core';
import { CASTE_AUTH_CONFIG, DEFAULT_CONFIG, CasteAuthConfig } from '../caste-auth.config';
import { HttpClient } from '@angular/common/http';
import { CasteCrudBase } from '../base.crud.service';
import { GivePermissions } from '../interfaces/give_permissions.interface';
import { Permission } from '../entities/permission.entity';

@Injectable({
  providedIn: 'root',
})
export class CastePermissionsService extends CasteCrudBase<Permission, Permission> {
  protected endpoint = 'permissions';

  constructor(@Inject(CASTE_AUTH_CONFIG) config: CasteAuthConfig, http: HttpClient) {
    super({ ...DEFAULT_CONFIG, ...config }, http);
  }

  givePermissionByUsername(data: GivePermissions) {
    return this.post<Permission>(`/user/${this.endpoint}`, data);
  }
}
