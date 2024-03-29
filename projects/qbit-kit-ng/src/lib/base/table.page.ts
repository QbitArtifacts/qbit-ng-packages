import { QSnackBar } from './../services/snackbar.service';
import { CreateDialogStatus } from './../enums/create-dialog-status';
import { QEventsService } from './../services/events.service';
import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort, SortDirection } from '@angular/material/sort';
import { Observable, of, Subject, timer } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { createTimer } from '../rxjs/create-timer';
import { MatDialogRef } from '@angular/material/dialog';
import { DeleteDialogStatus } from '../enums/delete-dialog-status';
import { Subscription } from 'rxjs/internal/Subscription';
import { QTableFiltersAutocomplete, QTableListHeaderOptions } from '../../public-api';

@Component({
  template: '',
})
export abstract class QTableBase<T = any> implements OnInit {
  abstract displayedColumns: string[];
  public searchableColumns: string[] = [];
  public dataSource: MatTableDataSource<T>;
  public isLoading = false;
  public query = '';
  public searchPipes: any[] = [];
  public hasData = false;
  public searchMapping = [];
  public tableOptions: QTableListHeaderOptions = {};

  @Input() public filterByOwner = false;
  @Input() public owner = null;
  @Input() public userType = 'user';
  @Input() public listType;
  @Input() public createType;
  @Input() public deleteType;
  @Input() public showBreadcrumbs = true;
  @Input() public autoRefresh = true;
  @Input() public initialSearch = false;
  @Input() public refreshInterval = 60e3;
  @Input() public autocompleteData: QTableFiltersAutocomplete = {};

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  // Paginator inputs
  public totalItems = 10;
  public pageSize = 10;
  public pageIndex = 0;
  public pageSizeOptions: number[] = [5, 10, 25, 100];

  // Sort
  public sortId = 'created_at';
  public sortDir: SortDirection = 'desc';

  public isTrader = false;
  public isInvestor = false;
  public isAdmin = false;

  public searchParams: any = {};
  protected stopPolling = new Subject();
  protected timer: Subscription;

  constructor(
    public snackbar: QSnackBar,
    public events: QEventsService,
    public router: Router,
    public route: ActivatedRoute,
  ) {
    this.events.on('account:changed').subscribe(this.onAccountChanged.bind(this));
  }

  ngOnInit() {
    if (!this.listType) this.listType = this.userType;
    if (!this.createType) this.createType = this.userType;
    if (!this.deleteType) this.deleteType = this.userType;

    this.route.queryParams.subscribe((params) => {
      if (params.pageIndex != null) {
        this.pageIndex = Number(params.pageIndex);
      }
      if (params.pageSize != null) {
        this.pageSize = Number(params.pageSize);
      }
      if (params.sortDir != null) {
        this.sortDir = params.sortDir;
      }
      if (params.sortId != null) {
        this.sortId = params.sortId;
      }

      this.sort.direction = this.sortDir;
      this.sort.active = this.sortId;
      this.paginator.pageIndex = this.pageIndex;
      this.paginator.pageSize = this.pageSize;

      this.searchParams = this.searchParams || {};
      for (let key in params) {
        this.searchParams[key] = params[key];
      }

      if (this.initialSearch) this.onSearch(this.searchParams);
    });

    this.startTimer();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!('autoRefresh' in changes)) return;

    if (!changes.autoRefresh) {
      this.stopTimer();
    } else {
      this.startTimer();
    }
  }

  ngOnDestroy() {
    this.stopPolling.next();
  }

  abstract getSearchObservable(
    queryParams: {
      [key: string]: string;
    },
    userType?: string,
  ): Observable<any>;

  abstract getRemoveItemObservable(id: string, userType?: string): Observable<any>;
  abstract getRemoveItemDialog(id: string): MatDialogRef<any, any>;
  abstract getOwner(): string;

  public startTimer() {
    this.stopTimer();

    this.timer = createTimer(
      this.timerRefreshObservable.bind(this),
      this.stopPolling,
      this.refreshInterval,
      this.initialSearch ? 1 : this.refreshInterval,
    ).subscribe({
      next: this.onGotSearchData.bind(this),
      error: (error) => {
        this.hasData = false;
        this.setIsLoading(false);
      },
    });
  }

  timerRefreshObservable(): Observable<any> {
    console.log('timerRefreshObservable', this.autoRefresh);

    if (this.autoRefresh == false) return of(null);
    return this.getOnSearchObservable();
  }

  public stopTimer() {
    if (this.timer) {
      this.timer.unsubscribe();
    }
  }

  public hasOwner() {
    return !!this.getOwner();
  }

  /* istanbul ignore next */
  public onAccountChanged() {
    this.onSearch(this.searchParams);
  }

  /* istanbul ignore next */
  public getOnSearchObservable(owner?: string) {
    this.setIsLoading(true);

    const params = this.getParams(owner);

    let searchObservable = this.getSearchObservable(params, this.listType);
    const applyPipe = (pipe) => (searchObservable = searchObservable.pipe(pipe));

    if (this.searchPipes && this.searchPipes.length) {
      this.searchPipes.forEach(applyPipe);
    }

    return searchObservable;
  }

  /* istanbul ignore next */
  public async onSearch(searchParams?: any, owner?: string) {
    this.searchParams = searchParams;
    this.getOnSearchObservable(owner).subscribe({
      next: this.onGotSearchData.bind(this),
      error: (error) => {
        this.hasData = false;
        this.setIsLoading(false);
      },
    });
  }

  public onGotSearchData(resp) {
    if (!resp) return;

    this.totalItems = resp.total || 0;
    this.hasData = this.totalItems > 0;

    // Only set mapping on first load
    if (this.searchMapping && !this.searchMapping.length) {
      this.searchMapping = this.processSearchMapping(resp);
    }

    this.setData(resp.data || []);
    this.setIsLoading(false);
  }

  public processSearchMapping(resp) {
    const props = {};
    const searchMapping = [];

    for (let mapping of resp.search) {
      if (!props[mapping.variable]) {
        searchMapping.push(mapping);
      }

      props[mapping.variable] = mapping;
    }

    return searchMapping;
  }

  private getParams(owner) {
    // Get owner
    if (this.filterByOwner && this.hasOwner()) {
      this.owner = this.getOwner();
    }

    const params: any = {
      ...this.getPaginationParams(),
      ...this.getSortParams(),
      ...this.getSearchParams(),
    };

    if (this.owner) {
      params.account_id = this.owner;
    } else if (owner) {
      params.account_id = owner;
    }

    return params;
  }

  /* istanbul ignore next */
  public openRemoveConfirmation(id: string) {
    this.getRemoveItemDialog(id)
      .afterClosed()
      .subscribe((resp) => {
        if (resp === DeleteDialogStatus.DELETE) {
          this.removeItem(id);
        }
      });
  }

  /* istanbul ignore next */
  private removeItem(id: string) {
    this.getRemoveItemObservable(id, this.deleteType).subscribe({
      next: this.onItemRemoved.bind(this),
      error: this.onItemRemoveError.bind(this),
    });
  }

  public setIsLoading(loading: boolean): void {
    this.isLoading = loading;
  }

  public setData(data: T[]) {
    this.dataSource = new MatTableDataSource(data);
  }

  /* istanbul ignore next*/
  public prevPage() {
    if (this.paginator.hasPreviousPage()) {
      this.paginator.previousPage();
    }
  }

  /* istanbul ignore next*/
  public nextPage() {
    if (this.paginator.hasNextPage()) {
      this.paginator.nextPage();
    }
  }

  /* istanbul ignore next */
  public onItemRemoved() {
    this.snackbar.open('REMOVED_ITEM');
    this.onSearch(this.searchParams);
  }

  /* istanbul ignore next */
  public onItemRemoveError(err) {
    this.snackbar.open(err.message || err.detail);
  }

  /* istanbul ignore next */
  public onNewItemAdded(resp) {
    if (resp === CreateDialogStatus.CREATED) {
      this.onSearch({ ...this.getParams(this.owner), ...this.searchParams });
    }
  }

  /* istanbul ignore next */
  public pageChanged($event: PageEvent) {
    this.pageSize = $event.pageSize;
    this.pageIndex = $event.pageIndex;

    this.addToQueryParams({
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
    });
  }

  /* istanbul ignore next */
  public searchParamsChanged(event) {
    this.searchParams = event;
  }

  /* istanbul ignore next */
  public getPaginationParams() {
    return {
      itemsPerPage: this.pageSize,
      page: this.pageIndex + 1,
    };
  }

  public getSortParams() {
    if (this.sortId) {
      const sortIdKey = `order[${this.sortId}]`;
      return {
        [sortIdKey]: this.sortDir,
      };
    }

    return {};
  }

  public getSearchParams() {
    return this.searchParams ?? {};
  }

  public sortChanged($event: Sort) {
    this.sortId = $event.active;
    this.sortDir = $event.direction;

    this.addToQueryParams({
      sortId: this.sortId,
      sortDir: this.sortDir,
    });
  }

  private addToQueryParams(data: Params) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: data,
      queryParamsHandling: 'merge',
    });
  }

  public trackById(index, item: any) {
    return item.id;
  }
}
