import { IBaseEntity } from './base.entity';

export interface IApplication extends IBaseEntity {
  name: string;
  realm: string;
  grants?: string[];
  default_grants?: string[];
}

export class Application implements IApplication {
  name: string;
  realm: string;
  grants?: string[];
  default_grants?: string[];
}
