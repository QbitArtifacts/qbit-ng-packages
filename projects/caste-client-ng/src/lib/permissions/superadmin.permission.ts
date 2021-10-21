import { CasteUserService } from '../management/caste-user.service';
import { InternalPermission } from '../entities/internal-permission.entity';
import { User } from '../entities/user.entity';
import { ROLES } from '../roles';

export class SuperAdminPermission extends InternalPermission {
  constructor(subPermissions: InternalPermission[]) {
    super('sadmin', subPermissions);
  }

  public canActivate(user: User, user$: CasteUserService) {
    if (!user) {
      return false;
    }

    const superActivate = super.canActivate(user, user$);
    const userCan = user.hasRole(ROLES.Admin);

    return userCan && superActivate;
  }
}
