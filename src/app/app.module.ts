import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {
  QbitAuthModule,
  QBIT_AUTH_CONFIG,
} from 'projects/caste-client-ng/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, QbitAuthModule],
  providers: [
    {
      provide: QBIT_AUTH_CONFIG,
      useValue: {
        realm: 'default',
        url: 'https://api.caste.qbitartifacts.com',
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
