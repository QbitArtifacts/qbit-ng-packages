import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';

@Component({
  selector: 'permissions-selector',
  templateUrl: 'permissions-selector.component.html',
  styles: [
    `
      :host {
        display: inherit;
      }
    `,
  ],
})
export class PermissionsSelector {
  @Input() selectedGrants: string[] = [];
  @Input() permission: any;
  @Input() disabled: boolean = false;
  @Input() availableGrants = ['ACCOUNT_WORKER', 'ACCOUNT_MANAGER', 'ACCOUNT_INVESTOR', 'ACCOUNT_TRADER'];

  @Output() permissionsChange: EventEmitter<string[]> = new EventEmitter();

  @ViewChild('grantSelection', { static: true })
  grantsSelection: MatSelectionList;

  public grants = [];
  public selectionChanged = false;

  /* istanbul ignore next */
  ngOnInit() {
    this.selectedGrants = this.permission ? this.permission.grants : [];
    this.grants = this.availableGrants.map((el) => {
      return {
        name: el,
        selected: this.isSelected(el),
      };
    });
  }

  /* istanbul ignore next */
  emitChanges() {
    if (this.selectionChanged) {
      const newGrants = this.grantsSelection.selectedOptions.selected.map((el) => el.value.name);
      this.permissionsChange.emit(newGrants);
    }
  }

  /* istanbul ignore next */
  public isSelected(grant: string) {
    return this.selectedGrants.includes(grant);
  }
}
