import { QEventsService } from './../../../projects/qbit-kit-ng/src/lib/services/events.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { QSnackBar, QTableBase } from 'projects/qbit-kit-ng/src/public-api';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends QTableBase implements OnInit {
  displayedColumns: string[] = ['id', 'name'];

  constructor(public snackbar$: QSnackBar, events: QEventsService, router: Router, route: ActivatedRoute) {
    super(snackbar$, events, router, route);
  }

  getSearchObservable(queryParams: { [key: string]: string }, userType?: string): Observable<any> {
    return of({
      total: 2,
      data: [
        { id: 1, name: 'Test' },
        { id: 2, name: 'Test2' },
      ],
    });
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
