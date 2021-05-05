import { QEventsService } from './../../../../services/events.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CasteUserService } from '@qbitartifacts/caste-client-ng';

@Component({
  selector: 'sa-current-account-selector',
  templateUrl: './current-account-selector.component.html',
  styleUrls: ['./current-account-selector.component.scss'],
})
export class SaCurrentAccountSelectorComponent implements OnInit {
  public accounts = [];
  public account = null;

  @Input() label;
  @Input() saveAccount = true;
  @Output() accountSelected = new EventEmitter<any>();

  constructor(public user$: CasteUserService, public events: QEventsService, public router: Router) {}

  public ngOnInit() {
    this.accounts = this.user$.user.accounts;
    this.setInitialAccount();
  }

  /* istanbul ignore next */
  public setInitialAccount() {
    const lsAccountId = localStorage.getItem('selected_account');

    if (lsAccountId !== null) {
      const accountFromLsId = this.accounts.find((el) => el.id === lsAccountId);
      if (accountFromLsId) {
        return this.setSelectedAccount(accountFromLsId);
      }
    }

    this.setSelectedAccount(this.user$.selectedAccount || this.accounts[0]);
  }

  /* istanbul ignore next */
  public selectAccount(account) {
    this.router.navigate(['/dashboard']);

    localStorage.setItem('selected_account', account.id);
    this.setSelectedAccount(account);
    this.accountSelected.emit(account);
    this.events.fire('account:changed', account);
  }

  public setSelectedAccount(account) {
    this.account = account;
    this.user$.setSelectedAccount(account);
  }
}
