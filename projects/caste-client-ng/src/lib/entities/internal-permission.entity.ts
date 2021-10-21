import { CasteUserService } from '../management/caste-user.service';
import { User } from './user.entity';

export interface InternalPermission {
  name: string;
  canActivate(user: User, user$: CasteUserService): boolean;
}

/**
 * Permission class is used to manage user permissions.
 * It checks wether a user can view/interact with some other parts of the system
 */
export class InternalPermission implements InternalPermission {
  public name = 'Default';
  public subPermissions: InternalPermission[] = [];

  constructor(name: string, subPermissions: InternalPermission[] = []) {
    this.name = name;
    this.subPermissions = subPermissions;
  }

  public is(permission: InternalPermission | string) {
    if (permission instanceof InternalPermission) {
      return this.name === permission.name;
    }

    return this.name === permission;
  }

  public includes(perm: InternalPermission): boolean {
    return this.subPermissions.includes(perm);
  }

  public supports(perm: InternalPermission): boolean {
    return this.is(perm) || this.includes(perm);
  }

  /* istanbul ignore next */
  public canActivate(user: User, user$: CasteUserService): boolean {
    if (this.subPermissions && this.subPermissions.length) {
      for (const subPerm of this.subPermissions) {
        if (subPerm.canActivate(user, user$)) {
          return true;
        }
      }
    }

    return false;
  }
}
