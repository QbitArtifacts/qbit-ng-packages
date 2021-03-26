import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { QCommonModule } from '../../../../common.module';
import { QNotFoundComponent } from './page-not-found.component';

@NgModule({
  imports: [QCommonModule, RouterModule],
  declarations: [QNotFoundComponent],
  exports: [QNotFoundComponent],
})
export class QNotFoundModule {}
