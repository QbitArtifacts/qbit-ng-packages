import { Component, Input, OnInit } from '@angular/core';

export interface TableListHeaderOptions {
  showLoading?: boolean;
  showBreadcrumbs?: boolean;
}

const defaultOptions: TableListHeaderOptions = {
  showLoading: true,
  showBreadcrumbs: false,
};

@Component({
  selector: 'qbit-table-header',
  templateUrl: './table-header.html',
})
export class QTableHeaderComponent implements OnInit {
  @Input() public options: TableListHeaderOptions = {};
  @Input() public title = 'TableList';
  @Input() public isLoading = false;

  ngOnInit() {
    this.options = {
      ...defaultOptions,
      ...this.options,
    };
  }
}
