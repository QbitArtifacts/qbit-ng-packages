import { Component, OnInit } from '@angular/core';
import { QBreadcrumbsService } from './../../../../services/breadcrumbs.service';

@Component({
  selector: 'qbit-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class QBreadcrumbsComponent {
  constructor(public breadcrumbs: QBreadcrumbsService) {}
}
