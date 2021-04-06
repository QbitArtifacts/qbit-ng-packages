import { Component, Input, OnInit } from '@angular/core';
import { QChipComponent } from '../chip/chip.component';

@Component({
  selector: 'qbit-chip-link',
  templateUrl: './chip-link.component.html',
})
export class QChipLinkComponent extends QChipComponent {
  @Input() link: string;
}
