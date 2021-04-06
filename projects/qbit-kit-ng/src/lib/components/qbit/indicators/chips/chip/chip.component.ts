import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'qbit-chip',
  templateUrl: './chip.component.html',
})
export class QChipComponent {
  @Input() label = 'label';
  @Input() icon: string;
  @Input() class: string;
  @Input() color = 'gray';
  @Input() tooltip;
}
