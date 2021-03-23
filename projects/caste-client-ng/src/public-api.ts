import { AdminPermission } from './lib/permissions/admin.permission';
import { PublicPermission } from './lib/permissions/public.permission';
import { SuperAdminPermission } from './lib/permissions/superadmin.permission';
import { UserPermission } from './lib/permissions/user.permission';

// Auth
export * from './lib/caste-auth.service';
export * from './lib/caste-auth.config';
export * from './lib/caste-auth.module';

// Management
export * from './lib/caste-management.module';
export * from './lib/management/caste-applications.service';
export * from './lib/management/caste-permissions.service';
export * from './lib/management/caste-accounts.service';
export * from './lib/management/caste-users.service';
export * from './lib/management/caste-user.service';

// Other stuff
export * from './lib/base.service';
export * from './lib/base.crud.service';
export * from './lib/entities';
export * from './lib/interfaces';
export * from './lib/roles';

// Permissions
export const PermissionPublic = new PublicPermission([]);
export const PermissionUser = new UserPermission([PermissionPublic]);
export const PermissionAdmin = new AdminPermission([PermissionPublic, PermissionUser]);
export const PermissionSuperAdmin = new SuperAdminPermission([PermissionPublic, PermissionUser, PermissionAdmin]);

export const PERMISSIONS = {
  public: PermissionPublic,
  user: PermissionUser,
  admin: PermissionAdmin,
  sadmin: PermissionSuperAdmin,
};
