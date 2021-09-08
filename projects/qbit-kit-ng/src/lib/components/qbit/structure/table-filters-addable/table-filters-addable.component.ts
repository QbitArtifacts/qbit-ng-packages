import { QTableFiltersOptions } from './../table-filters/table-filters.component';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

// TODO: Only show remove on hover, or add outside the input
// TODO: Only show clear filters, if there is a filter

@Component({
  selector: 'qbit-table-filters-addable',
  templateUrl: './table-filters-addable.component.html',
  styleUrls: ['./table-filters-addable.component.scss'],
})
export class QTableFiltersAddable {
  @Input() filters: Params = {};
  @Input() hiddenFilters: string[] = [];
  @Input() label: string = 'FILTERS';
  @Input() showLabel: boolean = true;
  @Input() searchMapping: any[] = [];
  @Input() shownFilters: any[] = [];
  @Input() options: QTableFiltersOptions = {};
  @Output() filtersChanged: EventEmitter<Params> = new EventEmitter();

  constructor(public router: Router, public route: ActivatedRoute) {}

  ngOnInit() {
    console.log('hidden', this.hiddenFilters);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);

    if ('searchMapping' in changes || 'shownFilters' in changes || 'hiddenFilters' in changes) {
      for (let mapping of changes.searchMapping.currentValue) {
        if (this.filters[mapping.property] && !this.shownFilters.includes(mapping.property)) {
          this.shownFilters.push(mapping.property);
        }
      }
    }
  }

  search() {
    this.addToQueryParams(this.filters);
    this.filtersChanged.emit(this.filters);
  }

  addFilter(mapping) {
    this.shownFilters.push(mapping.property);
  }

  removeFilter(filter) {
    const filterIndex = this.shownFilters.indexOf(filter);
    if (filterIndex >= 0) {
      this.shownFilters.splice(filterIndex, 1);
    }
    this.filters[filter] = null;
    this.search();
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
    this.shownFilters = [];
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
