import { QCommonModule } from './common.module';
import { NgModule } from '@angular/core';
import { MatBadgeModule, MatSidenavModule, MatSnackBarModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { QSidemenuComponent } from './components/qbit/navigation/sidemenu/sidemenu.component';
import { QSidemenuService } from './services/sidemenu.service';
import { RouterModule } from '@angular/router';
import { CasteUserService } from '@qbitartifacts/caste-client-ng';

@NgModule({
  declarations: [QSidemenuComponent],
  providers: [QSidemenuService,CasteUserService],
  imports: [TranslateModule, MatSnackBarModule, MatSidenavModule, QCommonModule, RouterModule, MatBadgeModule,],
  exports: [QSidemenuComponent, TranslateModule, MatSnackBarModule, MatSidenavModule, MatBadgeModule],
})
export class QSidemenuModule {}
