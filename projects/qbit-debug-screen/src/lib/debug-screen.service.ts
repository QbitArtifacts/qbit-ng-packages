import { Injectable } from '@angular/core';
import { DataEntry } from './entities/data-entry';



@Injectable({
  providedIn: 'root',
})
export class DebugScreenService {
  public dataEntries: DataEntry[] = [];
  constructor() {}
}
