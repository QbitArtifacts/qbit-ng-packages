import { Component, OnInit, ViewChild, OnDestroy, ChangeDetectorRef, NgZone } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { QSidemenuService } from './../../../../services/sidemenu.service';
import { QEventsService } from './../../../../services/events.service';

@Component({
  selector: 'qbit-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class QSidemenuComponent implements OnInit, OnDestroy {
  @ViewChild('drawer', { static: true }) drawer: MatDrawer;

  constructor(public sidemenuService: QSidemenuService, private events$: QEventsService, private zone: NgZone) {
    events$.on('account:changed').subscribe((resp) => {
      // This is used to re-render the sidemenu after account has changed
      this.zone.run(() => {
        sidemenuService.items = sidemenuService.items.map((el) => ({ ...el }));
      });
    });
  }

  ngOnDestroy() {
    this.sidemenuService.destroy();
  }

  /* istanbul ignore next */
  ngOnInit() {
    this.sidemenuService.toggleEvent.subscribe(() => {
      this.drawer.toggle();
    });
  }
}
