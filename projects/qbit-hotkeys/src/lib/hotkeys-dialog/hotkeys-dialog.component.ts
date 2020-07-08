import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  templateUrl: './hotkeys-dialog.component.html',
  styleUrls: ['../kbd.scss']
})
export class HotkeysDialogComponent implements OnInit {
  // Holds all the hotkeys definitions
  public hotkeys: any[];

  // Holds the searched data
  public dataSource: any[];

  // Search string
  public search: string;

  /* istanbul ignore next */
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Map<any, any>,
    public translate: TranslateService
  ) {
    this.hotkeys = Array.from(this.data).map((el) => {
      return [el[0].split('.'), translate.instant(el[1]), el[0]];
    });
    this.dataSource = this.hotkeys;
  }

  filter() {
    this.dataSource = this.hotkeys.filter((el) => {
      const keysMatch = el[2].includes(this.search.toLowerCase());
      const descMatch = el[1].toLowerCase().includes(this.search.toLowerCase());

      return keysMatch || descMatch;
    });
  }

  ngOnInit() {}
}
