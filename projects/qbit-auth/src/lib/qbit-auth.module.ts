import { NgModule } from '@angular/core';
import { QbitAuthService } from './qbit-auth.service';
import { HttpClientModule } from '@angular/common/http';
import { CasteApplicationService } from './management/caste-applications.service';
import { CasteUsersService } from './management/caste-users.service';
import { CastePermissionsService } from './management/caste-permissions.service';
import { CasteAccountsService } from './management/caste-accounts.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    QbitAuthService,
    CasteApplicationService,
    CasteUsersService,
    CastePermissionsService,
    CasteAccountsService,
  ],
})
export class QbitAuthModule {}
