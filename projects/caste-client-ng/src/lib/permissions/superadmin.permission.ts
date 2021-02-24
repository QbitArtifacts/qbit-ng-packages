import { InternalPermission } from '../entities/internal-permission.entity';
import { User } from '../entities/user.entity';
import { ROLES } from '../roles';

export class SuperAdminPermission extends InternalPermission {
  constructor(subPermissions: InternalPermission[]) {
    super('sadmin', subPermissions);
  }

  public canActivate(user?: User) {
    if (!user) {
      return false;
    }

    const superActivate = super.canActivate(user);
    const userCan = user.hasRole(ROLES.Admin);

    return userCan && superActivate;
  }
}
