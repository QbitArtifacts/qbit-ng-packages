import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CasteAuthService } from './caste-auth.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [CasteAuthService],
})
export class CasteAuthModule {}
