import { IBaseEntity } from './base.entity';

export interface ApplicationConfig extends IBaseEntity {
  application: Application;
  frontend_url: string;
  mailer_dsn: string;
  mailer_from: string;
}

export interface IApplication extends IBaseEntity {
  name: string;
  realm: string;
  grants?: string[];
  default_grants?: string[];
  config: ApplicationConfig;
}

export class Application implements IApplication {
  name: string;
  realm: string;
  grants?: string[];
  default_grants?: string[];
  config: ApplicationConfig;

  id?: string;
  iri?: string;
  created_at?: string;
  updated_at?: string;

  static fromJson(obj: any): Application {
    const app = new Application();

    app.id = obj.id;
    app.iri = obj['@id'];
    app.updated_at = obj.updated_at;
    app.created_at = obj.created_at;

    app.name = obj.name;
    app.realm = obj.realm;
    app.grants = obj.grants;
    app.config = obj.config || [];
    app.default_grants = obj.default_grants;

    return app;
  }
}
