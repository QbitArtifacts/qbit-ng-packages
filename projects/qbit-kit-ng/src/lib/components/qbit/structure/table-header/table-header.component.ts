import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';

export interface TableListHeaderOptions {
  refresh?: boolean;
  newItem?: boolean;
  showOptions?: boolean;
  deepLinkQuery?: boolean;
  showLoading?: boolean;
}

const defaultOptions: TableListHeaderOptions = {
  refresh: true,
  showLoading: true,
  newItem: false,
  showOptions: false,
  deepLinkQuery: false,
};

@Component({
  selector: 'qbit-table-header',
  templateUrl: './table-header.html',
})
export class QTableHeaderComponent {
  @Input() public options: TableListHeaderOptions = {};
  @Input() public title = 'TableList';
  @Input() public query = '';
  @Input() public searchPlaceholder = 'Search';
  @Input() public inputClass = 'input border-radius-2';

  @Input() public newItemText = '';
  @Input() public newItemIcon = 'fa-plus';
  @Input() public isLoading = false;
  @Input() public showBreadcrumbs = true;

  constructor(public router: Router, public route: ActivatedRoute) {
    this.options = {
      ...defaultOptions,
      ...this.options,
    };
  }
}
