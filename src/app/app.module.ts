import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CasteAuthModule, CASTE_AUTH_CONFIG } from 'projects/caste-client-ng/src/public-api';
import { QBreadcrumbsModule, QSnackBarModule } from 'projects/qbit-kit-ng/src/public-api';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    CommonModule,
    BrowserModule,
    CasteAuthModule,
    QBreadcrumbsModule,
    QSnackBarModule,
    TranslateModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent,
      },
    ]),
  ],
  providers: [
    {
      provide: CASTE_AUTH_CONFIG,
      useValue: {
        realm: 'default',
        url: 'https://api.caste.qbitartifacts.com',
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
