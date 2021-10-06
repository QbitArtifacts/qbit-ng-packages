import { QEventsService } from './../../../../services/events.service';
import { Component, Input } from '@angular/core';
import { CasteAccountsService, CasteUserService } from '@qbitartifacts/caste-client-ng';
import { QApiSelectorComponent } from '../../../../../lib/base/api-selector';
import { Observable } from 'rxjs';
import { UserType } from '@qbitartifacts/caste-client-ng/lib/types';
import { Router } from '@angular/router';

@Component({
  selector: 'sa-admin-account-selector',
  templateUrl: './admin-account-selector.component.html',
})
export class SaAdminAccountSelectorComponent extends QApiSelectorComponent {
  public label: string = 'SELECT_ACCOUNT';
  @Input() public userType: UserType = 'admin';

  constructor(
    public user$: CasteUserService,
    public events: QEventsService,
    public router: Router,
    public accounts$: CasteAccountsService,
  ) {
    super();
  }

  public getSearchObservable(query: string): Observable<any> {
    return this.accounts$.listAll({ ...this.filters, name: query }, this.userType);
  }
}
