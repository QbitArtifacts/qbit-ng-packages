import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CasteAccountsService, CasteUserService } from '@qbitartifacts/caste-client-ng';

@Component({
  selector: 'sa-admin-account-selector',
  templateUrl: './admin-account-selector.component.html',
  styleUrls: ['./admin-account-selector.component.scss'],
})
export class SaAdminAccountSelectorComponent implements OnInit {
  public accounts = [];
  @Input() public account = null;
  @Input() saveAccount = true;
  @Input() disabled = false;
  @Output() accountSelected = new EventEmitter<any>();

  constructor(public user$: CasteUserService, public accounts$: CasteAccountsService) {}

  public ngOnInit() {
    this.getAccounts();
  }

  /* istanbul ignore next */
  public getAccounts() {
    this.accounts$.listAll({ itemsPerPage: '100' }, 'admin').subscribe((resp: any) => {
      this.accounts = resp.data;
      this.setSelectedAccount();
    });
  }

  /* istanbul ignore next */
  public setSelectedAccount() {
    if (typeof this.account === 'string') {
      const foundAccount = this.accounts.find((el) => el.id === this.account);
      this.selectAccount(foundAccount);
    } else if (!this.account) {
      this.selectAccount(this.accounts[0]);
    }
  }

  /* istanbul ignore next */
  public selectAccount(account) {
    this.account = account;
    if (this.saveAccount) {
      this.user$.setSelectedAccount(account);
    } else {
      this.accountSelected.emit(account);
    }
  }
}
