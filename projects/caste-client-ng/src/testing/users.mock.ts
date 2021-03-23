import { RoleAdmin, RoleReadonly, RoleUser, User } from '@qbitartifacts/caste-client-ng';

const baseUserData: any = {
  username: 'Manolo',
  lastnames: 'Edge Tejero',
  email: 'test@test.com',
  birthDate: '',
  id: 'test',
  roles: [],
};

// Admin user
export const MUserAdmin = new User()
  .fromJson(baseUserData)
  .setRoles([RoleAdmin, RoleUser]);

// Normal user
export const MUserUser = new User().fromJson(baseUserData).setRoles([RoleUser]);

// Readonly user
export const MUserReadOnly = new User()
  .fromJson(baseUserData)
  .setRoles([RoleReadonly]);
