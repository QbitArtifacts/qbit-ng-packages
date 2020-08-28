export interface Account {
  permissions: string[];
  id?: string;
  name?: string;
  created_at?: string;
  updated_at?: string;
}

export interface NewAccount {
  name: string;
}
