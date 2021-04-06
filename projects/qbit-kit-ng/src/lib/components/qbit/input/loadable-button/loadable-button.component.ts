import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'qbit-loadable-button',
  templateUrl: './loadable-button.component.html',
  styles: [
    `
      :host {
        display: inline-block;
        width: 100%;
      }

      .loadable-btn {
        display: flex;
        align-items: center;
      }

      .white-spinner {
        margin-right: 10px;
      }
    `,
  ],
})
export class QLoadableButtonComponent {
  @Input() disabled = false;
  @Input() loading = false;
  @Input() color = 'primary';
  @Input() id = 'loadable-btn';

  @Output() clicked: EventEmitter<any> = new EventEmitter();

  public onClick() {
    this.clicked.emit();
  }
}
