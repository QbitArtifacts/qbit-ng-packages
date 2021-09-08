import { Component, Input } from '@angular/core';
import { CasteApplicationService, IApplication } from '@qbitartifacts/caste-client-ng';
import { QApiSelectorComponent } from 'projects/qbit-kit-ng/src/public-api';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'custom-selector',
  templateUrl: './custom-selector.component.html',
})
export class CustomSelectorComponent extends QApiSelectorComponent {
  @Input() public userType: any = 'sadmin';
  label: string = 'SELECT_FRUIT';

  constructor(public applications$: CasteApplicationService) {
    super();
  }

  getSearchObservable(query: string): Observable<{ fruitName: string }[]> {
    return of([
      {
        fruitName: 'apple',
        name: 'aaaa'
      },
      {
        fruitName: 'pear',
        name: 'bbb'
      },
    ]);
  }
}
