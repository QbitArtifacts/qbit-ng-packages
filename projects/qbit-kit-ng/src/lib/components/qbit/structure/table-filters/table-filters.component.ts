import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

export interface TableFiltersOptions {}

@Component({
  selector: 'qbit-table-filters',
  templateUrl: './table-filters.component.html',
  styleUrls: ['./table-filters.component.scss'],
})
export class QTableFilters {
  @Input() filters: Params = {};
  @Input() label: string = 'FILTERS';
  @Input() showLabel: boolean = true;
  @Input() searchMapping: any[];
  @Input() options: TableFiltersOptions = {};
  @Output() filtersChanged: EventEmitter<Params> = new EventEmitter();

  public filterKeys: string[] = [];

  constructor(public router: Router, public route: ActivatedRoute) {}

  ngOnChanges() {
    if (this.searchMapping && this.searchMapping.length) {
      this.filterKeys = this.searchMapping.map((e) => e.property);
    }
  }

  search() {
    this.addToQueryParams(this.filters);
    this.filtersChanged.emit(this.filters);
  }

  fieldChanged(prop, value) {
    this.filters[prop] = value;

    if (!value) this.filters[prop] = null;

    this.search();
  }

  get filterCount() {
    return Object.getOwnPropertyNames(this.filters).filter((k) => this.filters[k]).length;
  }

  clearFilters() {
    for (let key in this.filters) {
      this.filters[key] = null;
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
