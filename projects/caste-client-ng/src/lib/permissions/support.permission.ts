import { CasteUserService } from '../management/caste-user.service';
import { InternalPermission } from '../entities/internal-permission.entity';
import { User } from '../entities/user.entity';
import { RoleSupport } from '../roles';

export class SupportPermission extends InternalPermission {
  constructor(subPermissions: InternalPermission[]) {
    super('support', subPermissions);
  }

  public canActivate(user: User, user$: CasteUserService) {
    if (!user) {
      return false;
    }

    const superActivate = super.canActivate(user, user$);
    const userCan = user.hasRole(RoleSupport);

    return userCan && superActivate;
  }
}
