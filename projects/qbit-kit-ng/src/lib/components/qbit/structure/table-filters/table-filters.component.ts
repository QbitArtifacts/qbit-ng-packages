import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

export interface TableFiltersOptions {}

@Component({
  selector: 'qbit-table-filters',
  templateUrl: './table-filters.component.html',
  styleUrls: ['./table-filters.component.scss'],
})
export class QTableFilters {
  filterMap: Params = {};
  filterKeys: string[] = [];

  @Input() label: string = 'FILTERS';
  @Input() showLabel: boolean = true;
  @Input() searchMapping: any[];
  @Input() options: TableFiltersOptions = {};
  @Output() filtersChanged: EventEmitter<Params> = new EventEmitter();

  constructor(public router: Router, public route: ActivatedRoute) {}

  ngOnChanges() {
    if (this.searchMapping && this.searchMapping.length) {
      this.filterKeys = this.searchMapping.map((e) => e.property);
      this.route.queryParams.subscribe((params) => {
        for (let key in params) {
          if (this.filterKeys.includes(key)) {
            this.filterMap[key] = params[key];
          }
        }
        this.search();
      });
    }
  }

  search() {
    this.addToQueryParams(this.filterMap);
    this.filtersChanged.emit(this.filterMap);
  }

  fieldChanged(prop, value) {
    this.filterMap[prop] = value;

    if (!value) this.filterMap[prop] = null;

    this.search();
  }

  get filterCount() {
    return Object.getOwnPropertyNames(this.filterMap).filter((k) => this.filterMap[k]).length;
  }

  clearFilters() {
    for (let key in this.filterMap) {
      this.filterMap[key] = null;
    }
    this.search();
  }

  private addToQueryParams(data: Params) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: data,
      queryParamsHandling: 'merge',
    });
  }
}
