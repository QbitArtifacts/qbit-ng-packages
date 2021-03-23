import { Component, Input, EventEmitter, Output, ViewChild, ElementRef, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'qbit-searchable-selector',
  templateUrl: './searchable-selector.component.html',
})
export class QSearchableSelectorComponent implements OnInit {
  @Input() items = [];
  @Input() item = null;
  @Input() disabled = false;
  @Input() label = 'Selector';

  @Output() itemChanged = new EventEmitter<any>();
  @Output() onSearch = new EventEmitter<any>();

  @ViewChild('search', { static: false }) public searchElement: ElementRef;

  public query = '';

  ngOnInit() {
    setTimeout(() => {
      this.setupDebouncedSearch(this.searchElement.nativeElement);
    });
    this.search();
  }

  public selectItem(item) {
    this.itemChanged.emit(item);
  }

  /* istanbul ignore next */
  public setupDebouncedSearch(element) {
    console.log('setupDebouncedSearch');
    fromEvent(element, 'keyup')
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(250),
        distinctUntilChanged(),
      )
      .subscribe((text: string) => {
        this.search(text);
      });
  }

  search(text: string = '') {
    this.onSearch.emit(text);
  }
}
