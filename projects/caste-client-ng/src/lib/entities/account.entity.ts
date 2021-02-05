import { Application } from './application.entity';
import { IBaseEntity } from './base.entity';

export interface Account extends IBaseEntity {
  permissions: string[];
  name: string;
  application: Application;
}
