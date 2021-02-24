import { InternalPermission } from '../entities/internal-permission.entity';
import { User } from '../entities/user.entity';

// Public permission (is this permission is set, any user with any role can access this resource)
export class PublicPermission extends InternalPermission {
  constructor(subPermissions: InternalPermission[]) {
    super('public', subPermissions);
  }

  public canActivate(user: User) {
    return true;
  }
}
