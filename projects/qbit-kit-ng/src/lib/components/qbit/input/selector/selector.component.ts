import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'qbit-selector',
  templateUrl: './selector.component.html',
})
export class QSelectorComponent {
  @Input() items = [];
  @Input() item = null;
  @Input() disabled = false;
  @Input() label = 'Selector';
  @Output() selected = new EventEmitter<any>();

  public select(item) {
    this.selected.emit(item);
  }
}
