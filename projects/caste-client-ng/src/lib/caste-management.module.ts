import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CasteUsersService } from './management/caste-users.service';
import { CasteApplicationService } from './management/caste-applications.service';
import { CastePermissionsService } from './management/caste-permissions.service';
import { CasteAccountsService } from './management/caste-accounts.service';
import { CasteUserService } from './management/caste-user.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    CasteApplicationService,
    CasteUsersService,
    CastePermissionsService,
    CasteAccountsService,
    CasteUserService,
  ],
})
export class CasteManagementModule {}
