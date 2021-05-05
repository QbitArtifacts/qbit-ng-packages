import { InternalPermission } from '../entities/internal-permission.entity';
import { User } from '../entities/user.entity';
import { RoleSupport } from '../roles';

export class SupportPermission extends InternalPermission {
  constructor(subPermissions: InternalPermission[]) {
    super('support', subPermissions);
  }

  public canActivate(user?: User) {
    if (!user) {
      return false;
    }

    const superActivate = super.canActivate(user);
    const userCan = user.hasRole(RoleSupport);

    return userCan && superActivate;
  }
}
