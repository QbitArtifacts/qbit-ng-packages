import { RoleAdmin, RoleReadonly, ROLES } from '../roles';
import { User } from './user.entity';

describe('User', () => {
  const roles = [ROLES.Admin];

  it('should create an instance', () => {
    expect(new User()).toBeTruthy();
  });

  it('User .setRoles & .getRoles', () => {
    const user = new User();
    user.setRoles(roles);

    expect(user.getRoles()).toEqual(roles);
  });

  it('User .hasRole', () => {
    const user = new User();
    user.setRoles(roles);

    expect(user.getRoles()).toEqual(roles);
  });

  it('User .setRoles & .getRoles', () => {
    const user = new User();
    user.addRole(ROLES.Readonly);

    expect(user.hasRole(RoleReadonly)).toEqual(true);
  });

  it('User .fromJson', () => {
    const data = {
      name: 'test',
      username: 'test',
      roles: [],
      id: 'test',
    };
    const user = new User().fromJson(data);
    expect(user.username).toEqual(data.username);
  });

  it('User .getType', () => {
    const user = new User();
    user.setRoles([RoleAdmin]);

    expect(user.getType()).toEqual('ADMIN');
  });

  it('User .getType without roles', () => {
    const user = new User();
    user.setRoles([]);

    expect(user.getType()).toEqual('...');
  });
});
