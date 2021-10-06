import { Component, Input } from '@angular/core';
import { CasteApplicationService } from '@qbitartifacts/caste-client-ng';
import { Observable } from 'rxjs/internal/Observable';
import { QApiSelectorComponent } from '../../../../../lib/base/api-selector';

@Component({
  selector: 'sa-application-selector',
  templateUrl: './application-selector.component.html',
})
export class SaApplicationSelectorComponent extends QApiSelectorComponent {
  label: string = 'SELECT_APPLICATION';
  @Input() public userType: any = 'sadmin';

  constructor(public applications$: CasteApplicationService) {
    super();
  }

  getSearchObservable(query: string): Observable<any> {
    return this.applications$.listAll({ ...this.filters, name: query }, this.userType);
  }
}
