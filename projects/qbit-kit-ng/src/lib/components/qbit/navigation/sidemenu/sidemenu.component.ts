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
  static EVT_TOGGLE_SIDEMENU = 'toggle:sidemenu';
  public toggleEvent: EventEmitter<boolean>;
  public opened = true;

  @ViewChild('drawer', { static: true }) drawer: MatDrawer;

  constructor(public events: QEventsService, public sidemenuService: QSidemenuService) {
    this.recoverStateFromStorage();
    this.toggleEvent = events.on<boolean>(QSidemenuComponent.EVT_TOGGLE_SIDEMENU);
  }

  /* istanbul ignore next */
  saveStateToStorage() {
    localStorage.setItem(QSidemenuComponent.EVT_TOGGLE_SIDEMENU, String(this.drawer.opened));
  }

  /* istanbul ignore next */
  recoverStateFromStorage() {
    const saved = localStorage.getItem(QSidemenuComponent.EVT_TOGGLE_SIDEMENU);
    if (saved !== null) {
      this.opened = saved === 'true';
    }
  }

  ngOnDestroy() {
    this.toggleEvent.unsubscribe();
    this.events.off(QSidemenuComponent.EVT_TOGGLE_SIDEMENU);
  }

  /* istanbul ignore next */
  ngOnInit() {
    this.toggleEvent.subscribe(() => {
      this.drawer.toggle();
      this.saveStateToStorage();
    });
  }
}
