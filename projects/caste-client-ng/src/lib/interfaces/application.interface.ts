export interface Application {
  id?: string;
  name?: string;
  realm?: string;
  created_at?: string;
  updated_at?: string;
  grants?: string[];
  default_grants?: string[];
}
