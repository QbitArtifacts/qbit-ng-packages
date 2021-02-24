import { InternalPermission } from '../entities/internal-permission.entity';
import { User } from '../entities/user.entity';
import { RoleUser } from '../roles';

// Public permission (is this permission is set, any user with any role can access this resource)
export class UserPermission extends InternalPermission {
  constructor(subPermissions: InternalPermission[]) {
    super('user', subPermissions);
  }

  public canActivate(user?: User) {
    if (!user) {
      return false;
    }

    const superActivate = super.canActivate(user);
    const userCan = user.hasRole(RoleUser);

    return userCan && superActivate;
  }
}
