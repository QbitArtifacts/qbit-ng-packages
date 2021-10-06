import { QEventsService } from '../../../projects/qbit-kit-ng/src/lib/services/events.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {
  QSnackBar,
  QTableBase,
  QTableFiltersAutocomplete,
  QTableListHeaderOptions,
} from 'projects/qbit-kit-ng/src/public-api';
import { Observable } from 'rxjs';
import { UserType } from '@qbitartifacts/caste-client-ng/lib/types';
import { CasteUsersService } from 'projects/caste-client-ng/src/public-api';

@Component({
  selector: 'app-list-test',
  templateUrl: './list-test.component.html',
  styleUrls: ['./list-test.component.scss'],
})
export class ListTestComponent extends QTableBase implements OnInit {
  displayedColumns: string[] = ['id', 'username'];
  hiddenFilters = [];
  autocompleteData: QTableFiltersAutocomplete = {
    username: [
      {
        display: 'user-3-normal',
        value: 'user-3-normal',
      },
      {
        display: 'JHON',
        value: 'JHON',
      },
    ],
  };

  public tableOptions: QTableListHeaderOptions = {
    showLoading: true,
    showBreadcrumbs: false,
  };

  constructor(
    public snackbar$: QSnackBar,
    public users$: CasteUsersService,
    events: QEventsService,
    router: Router,
    route: ActivatedRoute,
  ) {
    super(snackbar$, events, router, route);
    this.initialSearch = true;
  }

  // public processSearchMapping(resp) {
  //   return super.processSearchMapping(resp).map((mapping) => {
  //     mapping.type = 'datetime-local';
  //     return mapping;
  //   });
  // }

  getSearchObservable(queryParams: { [key: string]: string }, userType?: UserType): Observable<any> {
    return this.users$.listAll(queryParams, 'admin');
  }

  getRemoveItemObservable(id: string, userType?: string): Observable<any> {
    throw new Error('Method not implemented.');
  }

  getRemoveItemDialog(id: string): MatDialogRef<any, any> {
    throw new Error('Method not implemented.');
  }

  getOwner(): string {
    throw new Error('Method not implemented.');
  }
}
