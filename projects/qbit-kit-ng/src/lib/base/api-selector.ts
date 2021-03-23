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

  /* istanbul ignore next */
  selectItem(item) {
    this.item = item;
    this.itemChange.emit(item);
  }

  public abstract getSearchObservable(query: string): Observable<any>;

  /* istanbul ignore next */
  public search(query?: string) {
    this.getSearchObservable(query).subscribe({
      next: (resp: any) => {
        this.items = resp.data;
      },
      error: (err) => {},
    });
  }
}
