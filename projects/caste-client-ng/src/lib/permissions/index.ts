import { AdminPermission } from './admin.permission';
import { PublicPermission } from './public.permission';
import { UserPermission } from './user.permission';
import { SuperAdminPermission } from './superadmin.permission';

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
