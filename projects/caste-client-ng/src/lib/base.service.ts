import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';
import { ApiError } from './interfaces/api_error.interface';
import { CasteAuthConfig, DEFAULT_CONFIG } from './caste-auth.config';

export type CombinedConfig<T = {}> = CasteAuthConfig & T;
export type ValidConfigKeys<T = any> = keyof CombinedConfig<T>;

/** @dynamic */
export abstract class BaseService<T = {}> {
  protected opts: CombinedConfig<T> = DEFAULT_CONFIG;
  public http: HttpClient;

  constructor(http: HttpClient, config: CombinedConfig<T>) {
    this.opts = config;
    this.http = http;
  }

  public setConfig(config: CombinedConfig<T>) {
    this.opts = config;
  }

  public addConfig(key: ValidConfigKeys<T>, value: any) {
    this.opts[key] = value;
  }

  private static cleanObject(obj: object) {
    for (const propName in obj) {
      if (obj[propName] === null || obj[propName] === undefined) {
        delete obj[propName];
      } else if (obj[propName] === 'null') {
        obj[propName] = null;
      }
    }
    return obj;
  }

  private getUrl(url?: any) {
    if (url && !url.map) {
      url = [url];
    }
    return [this.opts.url, ...url].join('');
  }

  protected abstract getToken();

  private getHeaders(overwriteHeaders: any = {}): HttpHeaders {
    const token = this.getToken();
    const headersObj = {
      ...this.opts.baseHeaders,
      ...overwriteHeaders,
    };

    if (token) {
      headersObj.Authorization = `Bearer ${token}`;
    }
    return new HttpHeaders(headersObj);
  }

  protected get<T = any>(
    url?: string | string[],
    params?: any,
    overwriteHeaders: any = {},
    overwriteOptions: any = {},
  ): Observable<T> {
    const headers = this.getHeaders(overwriteHeaders);
    let searchParams: HttpParams = new HttpParams();

    BaseService.cleanObject(params);

    if (params instanceof Array) {
      for (const param of params) {
        if (String(param.value).toString() === '[object Object]') {
          param.value = JSON.stringify(param.value);
        }
        searchParams = searchParams.append(param.key, param.value);
      }
    } else if (params) {
      for (const key in params) {
        if (key) {
          let param = params[key];
          if (String(param).toString() === '[object Object]') {
            param = JSON.stringify(param);
          }
          searchParams = searchParams.append(key, param);
        }
      }
    }

    const options = {
      headers,
      params: searchParams,
      ...overwriteOptions,
    };

    return this.http
      .get(this.getUrl(url), options)
      .pipe(map(this.extractData), catchError(this.handleError.bind(this)));
  }

  protected delete<T = any>(url: string | string[], data: any = {}, overwriteHeaders: any = {}): Observable<T> {
    const headers = this.getHeaders(overwriteHeaders);
    const options = {
      body: data,
      headers,
    };

    return this.http
      .delete(this.getUrl(url), options)
      .pipe(map(this.extractData), catchError(this.handleError.bind(this)));
  }

  protected post<T = any>(
    url: string | string[],
    data: any,
    content_type: string = 'application/json',
    overwriteHeaders: any = {},
  ): Observable<T> {
    const headers = this.getHeaders({
      'Content-Type': content_type,
      ...overwriteHeaders,
    });
    const options = { headers };

    BaseService.cleanObject(data);

    let params = data;
    if (content_type === 'application/x-www-form-urlencoded') {
      params = new HttpParams();
      for (const key in data) {
        if (key !== 'grant_types') {
          params.set(key, data[key]);
        }
      }
      if (data.grant_types) {
        for (const gtype of data.grant_types) {
          params = params.append('allowed_grant_types[]', gtype);
        }
      }
      params = params.toString();
    }
    if (content_type === 'multipart/form-data') {
      params = new FormData();
      for (const key in data) {
        if (key) {
          params = params.append(key, data[key]);
        }
      }
    }

    return this.http
      .post(this.getUrl(url), params, options)
      .pipe(map(this.extractData), catchError(this.handleError.bind(this)));
  }

  protected patch<T = any>(url: string | string[], data: any, overwriteHeaders: any = {}): Observable<T> {
    const headers = this.getHeaders(overwriteHeaders);
    const options = { headers };

    BaseService.cleanObject(data);

    return this.http
      .patch(this.getUrl(url), data, options)
      .pipe(map(this.extractData), catchError(this.handleError.bind(this)));
  }

  protected put<T = any>(
    url: string | string[],
    data: any,
    content_type: string = 'application/json',
    overwriteHeaders: any = {},
  ): Observable<T> {
    const headers = this.getHeaders({
      'content-type': content_type,
      ...overwriteHeaders,
    });
    const options = { headers };

    BaseService.cleanObject(data);

    return this.http
      .put(this.getUrl(url), data, options)
      .pipe(map(this.extractData), catchError(this.handleError.bind(this)));
  }

  public extractData(res: any) {
    if (res && res['hydra:member']) {
      const data = res['hydra:member'];
      const mapping = res['hydra:search']['hydra:mapping'].map((el) => {
        if (el.variable.includes('order')) {
          el.type = 'order';
        } else if (!el.variable.includes('[]')) {
          el.type = 'search';
        }
        return el;
      });

      return {
        data,
        search: mapping.filter((el) => el.type === 'search'),
        order: mapping.filter((el) => el.type === 'order'),
        total: res['hydra:totalItems'],
      };
    }

    return res;
  }

  public handleError(err) {
    const error = err.originalError || err.error || err;

    if (error['hydra:description']) {
      error.message = error['hydra:description'];
    }

    return throwError(error);
  }
}
