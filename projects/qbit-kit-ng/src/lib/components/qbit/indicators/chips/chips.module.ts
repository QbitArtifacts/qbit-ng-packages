import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { QCommonModule } from '../../../../common.module';
import { QChipLinkComponent } from './chip-link/chip-link.component';
import { QChipComponent } from './chip/chip.component';

@NgModule({
  imports: [QCommonModule, MatChipsModule, MatIconModule, RouterModule],
  declarations: [QChipComponent, QChipLinkComponent],
  exports: [QChipComponent, QChipLinkComponent],
})
export class QChipsModule {}
