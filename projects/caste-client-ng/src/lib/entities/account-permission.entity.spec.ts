import { AccountPermission, IAccountPermission } from './account-permission.entity';
import { Account } from './account.entity';
import { User } from './user.entity';

describe('AccountPermissionPermission', () => {
  it('should create an AccountPermission', () => {
    expect(new AccountPermission()).toBeTruthy();
  });

  it('AccountPermission.fromJson(json)', () => {
    const data: IAccountPermission = {
      id: 'string',
      name: 'string',
      created_at: 'string',
      updated_at: 'string',
      account: new Account(),
      grants: [],
      user: new User(),
    };
    const session = AccountPermission.fromJson(data);

    expect(session.name).toEqual(data.name);
    expect(session.id).toEqual(data.id);
    expect(session.account).toEqual(data.account);
    expect(session.user).toEqual(data.user);
    expect(session.created_at).toEqual(data.created_at);
    expect(session.updated_at).toEqual(data.updated_at);
  });
});
