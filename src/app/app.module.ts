import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CasteAuthModule, CASTE_AUTH_CONFIG } from 'projects/caste-client-ng/src/public-api';
import {
  QBIT_SIDEMENU_ITEMS,
  QBreadcrumbsModule,
  QSidemenuModule,
  QSnackBarModule,
} from 'projects/qbit-kit-ng/src/public-api';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QSidemenuItem } from 'projects/qbit-kit-ng/src/lib/components/qbit/navigation/sidemenu/sidemenu-item.interface';
import { CasteUserService } from '@qbitartifacts/caste-client-ng';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    CommonModule,
    BrowserModule,
    CasteAuthModule,
    QBreadcrumbsModule,
    QSnackBarModule,
    QSidemenuModule,
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
    CasteUserService,
    {
      provide: CASTE_AUTH_CONFIG,
      useValue: {
        realm: 'default',
        url: 'https://api.caste.qbitartifacts.com',
      },
    },
    {
      provide: QBIT_SIDEMENU_ITEMS,
      useValue: [
        {
          name: 'dashboard',
          icon: 'dashboard',
          label: 'DASHBOARD',
          route: '/dashboard',
        } as QSidemenuItem,
      ],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
