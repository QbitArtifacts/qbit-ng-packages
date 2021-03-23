import { InternalPermission } from '@qbitartifacts/caste-client-ng';

export interface QSidemenuItem {
  name: string;
  icon?: string;
  label: string;
  route?: string;
  separator?: boolean;
  action?: (...args: any[]) => any;
  permission?: InternalPermission;
  isExternal?: boolean;
  keyValue?: boolean;
  value?: any;
  badge?: string;
}
