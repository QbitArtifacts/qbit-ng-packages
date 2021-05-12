import { Component, OnInit, ViewChild, EventEmitter, OnDestroy, Input } from '@angular/core';
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

  constructor(public sidemenuService: QSidemenuService) {}

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
