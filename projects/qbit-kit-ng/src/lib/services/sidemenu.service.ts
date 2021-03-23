import { EventEmitter } from '@angular/core';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { PermissionUser } from '@qbitartifacts/caste-client-ng';
import { QSidemenuItem } from '../components/qbit/navigation/sidemenu/sidemenu-item.interface';
import { QEventsService } from './events.service';

export const QBIT_SIDEMENU_ITEMS = new InjectionToken<QSidemenuItem[]>('qbit.sidemenu.items');

@Injectable()
export class QSidemenuService {
  static EVT_TOGGLE_SIDEMENU = 'toggle:sidemenu';
  public opened = true;
  public items: QSidemenuItem[] = [];
  public toggleEvent: EventEmitter<boolean>;

  constructor(@Inject(QBIT_SIDEMENU_ITEMS) QSidemenuItems: QSidemenuItem[], public events: QEventsService) {
    this.items = QSidemenuItems;
    // this.recoverStateFromStorage();
    this.toggleEvent = events.on<boolean>(QSidemenuService.EVT_TOGGLE_SIDEMENU);
  }

  public destroy() {
    this.toggleEvent.unsubscribe();
    this.events.off(QSidemenuService.EVT_TOGGLE_SIDEMENU);
  }

  public setOpened(opened: boolean) {
    this.opened = opened;
    this.emitChanges();
  }

  public open() {
    this.setOpened(true);
  }

  public close() {
    this.setOpened(false);
  }

  public toggle() {
    this.setOpened(!this.opened);
  }

  private emitChanges() {
    this.toggleEvent.emit(this.opened);
    this.saveStateToStorage(this.opened);
  }

  /**
   * Updates a sidemenu item
   */
  public updateItem(name: string, item: Partial<QSidemenuItem>) {
    const itemIndex = this.items.findIndex((el) => el.name === name);
    const itemOriginal = this.items.find((el) => el.name === name);

    const itemMerged = {
      ...itemOriginal,
      ...item,
    };

    this.items[itemIndex] = itemMerged;
  }

  public addApiVersionItem(version) {
    const apiVersionAlreadyAdded = this.items.find((el) => el.label === 'API');
    if (!apiVersionAlreadyAdded) {
      this.items.push({
        name: 'api_version',
        keyValue: true,
        label: 'API',
        value: version,
        permission: PermissionUser,
      });
    }
  }

  private recoverStateFromStorage() {
    const saved = localStorage.getItem(QSidemenuService.EVT_TOGGLE_SIDEMENU);
    if (saved !== null) {
      this.opened = saved === 'true';
    }
  }

  private saveStateToStorage(state: boolean) {
    localStorage.setItem(QSidemenuService.EVT_TOGGLE_SIDEMENU, String(state));
  }
}
