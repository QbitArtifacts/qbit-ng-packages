import { IBaseEntity } from './base.entity';

export interface IPermission extends IBaseEntity {
  user: string;
  account: string;
  grants: string;
}

export class Permission implements IPermission {
  user: string;
  account: string;
  grants: string;
  id: string;
  iri: string;
  created_at: string;
  updated_at: string;
}
