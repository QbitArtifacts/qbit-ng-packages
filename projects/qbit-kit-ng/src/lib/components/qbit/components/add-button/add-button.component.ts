import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'qbit-button',
  templateUrl: './add-button.component.html',
})
export class QAddButtonComponent {
  @Input() color: string = 'primary';
  @Input() icon = 'add';
  @Input() text = 'ADD';

  @Output() add: EventEmitter<any> = new EventEmitter();
}
