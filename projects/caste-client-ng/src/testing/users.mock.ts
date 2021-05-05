import { Role, User } from '../lib/entities';
import { RoleAdmin, RoleReadonly, RoleSupport, RoleUser } from '../lib/roles';

const baseUserData: any = {
  username: 'Jhon',
  lastnames: 'Doe',
  email: 'test@test.com',
  birthDate: '',
  id: 'test',
  roles: [],
};

export function createWithDataAndRoles(data: any, roles: Role[] = []): User {
  return new User().fromJson(data).setRoles(roles);
}

export function createWithRoles(roles: Role[] = []): User {
  return createWithDataAndRoles(baseUserData, roles);
}

// Admin user
export const MUserAdmin = createWithRoles([RoleAdmin, RoleUser]);

// Normal user
export const MUserUser = createWithRoles([RoleUser]);

// Normal support
export const MUserSupport = createWithRoles([RoleUser, RoleSupport]);

// Readonly user
export const MUserReadOnly = createWithRoles([RoleReadonly]);
