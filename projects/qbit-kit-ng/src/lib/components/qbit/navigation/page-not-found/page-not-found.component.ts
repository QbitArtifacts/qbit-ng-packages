import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'qbit-page-not-found',
  templateUrl: './page-not-found.component.html',
})
export class QNotFoundComponent implements OnInit, OnDestroy {
  path: string;

  constructor(private route: ActivatedRoute) {}

  ngOnDestroy() {}

  ngOnInit() {
    this.route.data.pipe(take(1)).subscribe((data: { path: string }) => {
      this.path = data.path;
    });
  }
}
