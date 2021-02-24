import { Inject, Injectable, InjectionToken } from '@angular/core';
import { PermissionUser } from '@qbitartifacts/caste-client-ng';
import { QSidemenuItem } from '../components/qbit/navigation/sidemenu/sidemenu-item.interface';

export const QBIT_SIDEMENU_ITEMS = new InjectionToken<QSidemenuItem[]>('qbit.sidemenu.items');

@Injectable()
export class QSidemenuService {
  public items: QSidemenuItem[] = [];

  constructor(@Inject(QBIT_SIDEMENU_ITEMS) QSidemenuItems: QSidemenuItem[]) {
    this.items = QSidemenuItems;
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
}
