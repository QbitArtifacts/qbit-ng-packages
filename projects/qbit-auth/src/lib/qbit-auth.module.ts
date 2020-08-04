import { NgModule } from '@angular/core';
import { QbitAuthService } from './qbit-auth.service';
import { HttpClientModule } from '@angular/common/http';
import { QbitManagementService } from './qbit-management.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [QbitAuthService, QbitManagementService],
})
export class QbitAuthModule {}
