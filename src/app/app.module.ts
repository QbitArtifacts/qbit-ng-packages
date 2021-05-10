import { PermissionUser, PermissionPublic } from './../../projects/caste-client-ng/src/public-api';
import { CASTE_AUTH_CONFIG } from './../../projects/caste-client-ng/src/lib/caste-auth.config';
import { SaAdminAccountSelectorModule } from './../../projects/qbit-kit-ng/src/lib/components/superadmin/selectors/admin-account-selector/admin-account-selector.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {
  QCommonModule,
  QBreadcrumbsModule,
  QSnackBarModule,
  QSidemenuModule,
  QTableHeaderModule,
  QbitKitBaseModule,
  QBIT_SIDEMENU_ITEMS,
  QLangSelectorModule,
  QLoadableButtonModule,
  SaApplicationSelectorModule,
} from 'projects/qbit-kit-ng/src/public-api';
import {
  QbitLocaleConfig,
  QbitLocaleMetadata,
  QBIT_LOCALES,
} from 'projects/qbit-kit-ng/src/lib/services/locales.service';
import { ComponentsComponent } from './components/components.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';

const locales: QbitLocaleMetadata[] = [
  {
    name: 'es',
    abrev: 'es',
    icon: 'es',
  },
];

const qbitLocales: QbitLocaleConfig = {
  locales: locales,
  defaultLocale: locales[0],
};

@NgModule({
  declarations: [AppComponent, HomeComponent, ComponentsComponent],
  imports: [
    CommonModule,
    QCommonModule,
    BrowserModule,
    // CasteAuthModule,
    // SaComponentsModule,
    // QBreadcrumbsModule,
    // QSnackBarModule,
    QSidemenuModule,
    QTableHeaderModule,
    SaAdminAccountSelectorModule,
    SaApplicationSelectorModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    QbitKitBaseModule,
    TranslateModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'components',
        component: ComponentsComponent,
      },
    ]),
    MatToolbarModule,
    QLangSelectorModule,
    // QLoadableButtonModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    {
      provide: CASTE_AUTH_CONFIG,
      useValue: {
        realm: 'default',
        url: 'https://api.caste.qbitartifacts.com',
        baseHeaders: {
          accept: 'application/json',
          'content-type': 'application/json',
        },
        tokenStorageKey: 'qbit:auth:token',
      },
    },
    {
      provide: QBIT_LOCALES,
      useValue: qbitLocales,
    },
    {
      provide: QBIT_SIDEMENU_ITEMS,
      useValue: [
        {
          name: 'dashboard',
          icon: 'home',
          label: 'HOME',
          route: '/home',
          permission: PermissionUser,
        },
        {
          name: 'components',
          icon: 'home',
          label: 'components',
          route: '/components',
          permission: PermissionPublic,
        },
        {
          name: 'start',
          icon: 'dashboard',
          label: 'start',
          route: '/',
          permission: PermissionUser,
        },
      ],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
