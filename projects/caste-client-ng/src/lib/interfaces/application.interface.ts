export interface Application {
  id?: string;
  created_at?: string;
  updated_at?: string;
  name?: string;
  realm?: string;
  grants?: string[];
  default_grants?: string[];
}
