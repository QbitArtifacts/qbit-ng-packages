import { CasteUserService } from '../management/caste-user.service';
import { InternalPermission, User } from '../entities';
import { ROLES } from '../roles';

export class SidemenuSupportPermission extends InternalPermission {
  constructor(subPermissions: InternalPermission[]) {
    super('sidemenu-suport', subPermissions);
  }

  public canActivate(user: User, user$: CasteUserService) {
    if (!user) {
      return false;
    }

    const superActivate = super.canActivate(user, user$);
    const userIsSupport = user.hasRole(ROLES.Support);
    const userIsAdmin = user.hasRole(ROLES.Admin);
    return superActivate && userIsSupport && !userIsAdmin;
  }
}
