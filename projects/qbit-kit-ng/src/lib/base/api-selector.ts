import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserType } from '@qbitartifacts/caste-client-ng/lib/types';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  template: '',
})
export abstract class QApiSelectorComponent {
  @Input() public items: any[] = [];
  @Input() public item: any = null;
  @Input() public disabled: boolean = false;
  @Input() public userType: UserType = 'user';
  @Output() public itemChange: EventEmitter<string> = new EventEmitter();

  public itemQuery: string;
  public isLoading = false;

  /* istanbul ignore next */
  selectItem(item) {
    this.item = item;
    this.itemChange.emit(item);
  }

  public abstract getSearchObservable(query: string): Observable<any>;

  /* istanbul ignore next */
  public setInitialAccount() {
    const selectedItemId = this.item.id || this.item;

    if (selectedItemId !== null) {
      const account = this.items.find((el) => el.id === selectedItemId);
      if (account) {
        return this.setSelectedAccount(account);
      }
    }
  }

  /* istanbul ignore next */
  public selectAccount(account) {
    this.setSelectedAccount(account);
    this.itemChange.emit(account);
  }

  public setSelectedAccount(account) {
    this.item = account;
  }

  /* istanbul ignore next */
  public search(query?: string) {
    this.isLoading = true;
    this.getSearchObservable(query).subscribe({
      next: (resp: any) => {
        this.isLoading = false;

        if (Array.isArray(resp)) {
          this.items = resp;
        } else if (Array.isArray(resp.data)) {
          this.items = resp.data;
        } else {
          this.items = [];
        }

        console.log('got items', resp);
        this.setInitialAccount();
      },
      error: (err) => {
        this.isLoading = false;
      },
    });
  }
}
