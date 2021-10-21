import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'qbit-dialog-header',
  templateUrl: './dialog-header.component.html',
})
export class QDialogHeaderComponent {
  @Input() public title: string;
  @Input() public status = 'blue';
  @Input() public canClose: boolean = true;

  /**
   * @deprecated use (close) instead
   */
  @Output() public click: EventEmitter<any> = new EventEmitter();

  @Output() public close: EventEmitter<any> = new EventEmitter();

  closeClicked(){
    this.close.emit();

    // Remove in next versions
    this.click.emit();
  }
}
