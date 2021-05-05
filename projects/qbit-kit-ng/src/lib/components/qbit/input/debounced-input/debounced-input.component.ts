import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'qbit-debounced-input',
  templateUrl: './debounced-input.component.html',
  styleUrls: ['./debounced-input.component.scss'],
})
export class QDebouncedInput {
  @Input() public query = '';
  @Input() public placeholder = 'SEARCH';
  @Output() public onSearch: EventEmitter<any> = new EventEmitter();
  @Output() public queryChange: EventEmitter<any> = new EventEmitter();

  @ViewChild('search', { static: false }) public searchElement: ElementRef;

  public ngOnInit() {
    // Setup debound and params
    setTimeout(() => {
      this.setupDebouncedSearch(this.searchElement.nativeElement);
    });
  }

  public search() {
    this.onSearch.emit(this.query);
  }

  /* istanbul ignore next */
  public setupDebouncedSearch(element) {
    fromEvent(element, 'keyup')
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((text: string) => {
        this.query = text;
        this.search();
      });
  }

  public clear() {
    this.query = '';
    this.search();
  }
}
