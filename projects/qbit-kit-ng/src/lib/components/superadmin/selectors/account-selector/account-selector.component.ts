import { CasteUserService } from '@qbitartifacts/caste-client-ng';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'sa-account-selector',
  templateUrl: './account-selector.component.html',
  styleUrls: ['./account-selector.component.scss'],
})
export class SaAccountSelectorComponent {
  @Input() accounts = [];
  @Input() account = null;
  @Input() disabled = false;
  @Output() selected = new EventEmitter<any>();

  constructor(public user$: CasteUserService) {}

  public selectAccount(account) {
    this.selected.emit(account);
  }
}
