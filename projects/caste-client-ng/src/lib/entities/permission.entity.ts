import { IBaseEntity } from './base.entity';

export interface IPermission extends IBaseEntity {
  user: string;
  account: string;
  grants: string[];
}

export class Permission implements IPermission {
  id?: string;
  iri?: string;
  created_at?: string;
  updated_at?: string;
  user: string;
  account: string;
  grants: string[];
}
