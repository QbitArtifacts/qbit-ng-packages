import { NgModule } from '@angular/core';
import { QBIT_REQ_CACHE_MAX_AGE, RequestCacheService } from './services/request-cache.service';

const ONE_SECOND = 60e3;

@NgModule({
  providers: [RequestCacheService, { provide: QBIT_REQ_CACHE_MAX_AGE, useValue: ONE_SECOND }],
})
export class RequestCacheModule {}
