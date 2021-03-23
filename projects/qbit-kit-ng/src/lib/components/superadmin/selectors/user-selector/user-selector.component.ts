import { Component, Input } from '@angular/core';
import { CasteUsersService } from '@qbitartifacts/caste-client-ng';
import { Observable } from 'rxjs';
import { QApiSelectorComponent } from '../../../../../lib/base/api-selector';
import { UserType } from '@qbitartifacts/caste-client-ng/lib/types';

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
    return this.users$.listAll({ username: query }, 'sadmin');
  }
}
