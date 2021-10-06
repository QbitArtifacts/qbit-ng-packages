import { Component, Input } from '@angular/core';
import { CasteUsersService } from '@qbitartifacts/caste-client-ng';
import { UserType } from '@qbitartifacts/caste-client-ng/lib/types';
import { Observable } from 'rxjs';
import { QApiSelectorComponent } from '../../../../../lib/base/api-selector';

@Component({
  selector: 'sa-user-selector',
  templateUrl: './user-selector.component.html',
})
export class SaUserSelectorComponent extends QApiSelectorComponent {
  @Input() public label: string = 'SELECT_USER';
  @Input() public userType: UserType = 'sadmin';

  constructor(public users$: CasteUsersService) {
    super();
  }

  public getSearchObservable(query: string): Observable<any> {
    return this.users$.listAll({ ...this.filters, username: query }, this.userType);
  }
}
