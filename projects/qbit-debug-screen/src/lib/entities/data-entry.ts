import { Data } from '@angular/router';

export interface DataEntry {
  label: string;
  value: any;
}

export class DataEntry implements DataEntry {
  public label: string;
  public value: any;

  get type() {
    return typeof this.value;
  }
}
