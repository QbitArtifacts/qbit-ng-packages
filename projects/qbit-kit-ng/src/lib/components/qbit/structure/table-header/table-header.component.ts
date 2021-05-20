import { Component, Input, OnInit } from '@angular/core';

export interface QTableListHeaderOptions {
  showLoading?: boolean;
  showBreadcrumbs?: boolean;
}

const defaultOptions: QTableListHeaderOptions = {
  showLoading: true,
  showBreadcrumbs: false,
};

@Component({
  selector: 'qbit-table-header',
  templateUrl: './table-header.html',
})
export class QTableHeaderComponent implements OnInit {
  @Input() public options: QTableListHeaderOptions = {};
  @Input() public title = 'TableList';
  @Input() public isLoading = false;

  ngOnInit() {
    this.options = {
      ...defaultOptions,
      ...this.options,
    };
  }
}
