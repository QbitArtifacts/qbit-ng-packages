import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'qbit-dialog-header',
  templateUrl: './dialog-header.component.html',
})
export class QDialogHeaderComponent {
  @Input() public title: string;
  @Input() public status = 'blue';
  @Output() public click: EventEmitter<any> = new EventEmitter();
}
