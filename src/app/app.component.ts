import { PermissionUser } from './../../projects/caste-client-ng/src/public-api';
import { CasteAccountsService } from './../../projects/caste-client-ng/src/lib/management/caste-accounts.service';
import { Component } from '@angular/core';
import { CasteAuthService, CasteUsersService } from 'projects/caste-client-ng/src/public-api';
import { ApiError } from 'projects/caste-client-ng/src/lib/interfaces/api_error.interface';
import { QSidemenuService } from 'projects/qbit-kit-ng/src/public-api';
import { CasteUserService } from '@qbitartifacts/caste-client-ng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'qbit-ng-packages';
  permission = PermissionUser;
  showSelector = false;
  accountId = '1bcca53e-e2c8-11ea-b521-02420a00030b';
  appId = 'ff1ebd9c-33bc-11eb-90f0-02420a001302';

  constructor(
    public casteAuth: CasteAuthService,
    public users: CasteUsersService,
    public account: CasteAccountsService,
    public sidemenu: QSidemenuService,
    public user: CasteUserService,
  ) {
    this.signIn().subscribe((resp) => {
      casteAuth.saveToken(resp.token);
      this.user.setUserFromTokenData(resp);

      this.showSelector = true;
    });
  }

  public signIn() {
    return this.casteAuth.signIn({
      username: 'manolo_sa2',
      password: 'AkxED2Ap8e6a',
      realm: 'default',
    });
  }
}
