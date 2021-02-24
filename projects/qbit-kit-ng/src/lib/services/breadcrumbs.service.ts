import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

export interface Breadcrumb {
  label: string;
  url: string;
  icon?: string;
  query?: any;
}

@Injectable({
  providedIn: 'root',
})
export class QBreadcrumbsService {
  static readonly ROUTE_DATA_BREADCRUMB = 'breadcrumb';
  static readonly ROUTE_DATA_ICON = 'icon';

  readonly home = { icon: 'pi pi-home', url: '' };
  public list: Breadcrumb[] = [];

  /* istanbul ignore next */
  constructor(public route: ActivatedRoute, public router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.list = this.createBreadcrumbs(this.route.root);
      }
    });

    this.list = this.createBreadcrumbs(this.route.root);
  }

  /* istanbul ignore next */
  public editCurrent(label) {
    if (this.list.length) {
      this.list[this.list.length - 1].label = label;
    }
  }

  /* istanbul ignore next */
  private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map((segment) => segment.path).join('/');

      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      const label = child.snapshot.data[QBreadcrumbsService.ROUTE_DATA_BREADCRUMB];
      const icon = child.snapshot.data[QBreadcrumbsService.ROUTE_DATA_ICON];

      const alreadyCrumbed = this.list.find((el) => el.url === url);

      if (alreadyCrumbed) {
        alreadyCrumbed.query = {
          ...alreadyCrumbed.query,
          ...child.snapshot.queryParams,
        };
        breadcrumbs.push(alreadyCrumbed);
      } else if (label) {
        breadcrumbs.push({
          label,
          url,
          icon,
          query: child.snapshot.queryParams,
        });
      }

      return this.createBreadcrumbs(child, url, breadcrumbs);
    }
  }
}
