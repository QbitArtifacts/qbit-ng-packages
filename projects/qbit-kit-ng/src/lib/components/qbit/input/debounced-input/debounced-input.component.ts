import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { map } from 'rxjs/internal/operators/map';
import { AutocompleteItem } from '../../structure/table-filters-addable/table-filters-addable.component';

@Component({
  selector: 'qbit-debounced-input',
  templateUrl: './debounced-input.component.html',
  styleUrls: ['./debounced-input.component.scss'],
})
export class QDebouncedInput {
  @Input() public query = '';
  @Input() public type = 'text';
  @Input() public placeholder = 'SEARCH';
  @Input() public autocompleteValues: AutocompleteItem[] = [];
  @Output() public onSearch: EventEmitter<any> = new EventEmitter();
  @Output() public queryChange: EventEmitter<any> = new EventEmitter();

  @ViewChild('search', { static: false }) public searchElement: ElementRef;

  public ngOnInit() {
    setTimeout(() => {
      this.setupDebouncedSearch(this.searchElement.nativeElement);
    });
  }

  /* istanbul ignore next */
  public search() {
    this.onSearch.emit(this.query);
  }

  optionSelected(item: MatAutocompleteSelectedEvent) {
    this.query = item.option.value;
    this.search();
  }

  /* istanbul ignore next */
  public setupDebouncedSearch(element) {
    fromEvent(element, 'keyup')
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(500),
        distinctUntilChanged(),
      )
      .subscribe((text: string) => {
        this.query = text;
        this.search();
      });
  }

  /* istanbul ignore next */
  public clear() {
    this.query = '';
    this.search();
  }
}
