import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {
  CasteAuthModule,
  CasteAuthService,
  CasteUserService,
  CASTE_AUTH_CONFIG,
  PermissionPublic,
  PermissionUser,
} from '@qbitartifacts/caste-client-ng';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {
  QCommonModule,
  SaComponentsModule,
  QBreadcrumbsModule,
  QSnackBarModule,
  QSidemenuModule,
  QTableHeaderModule,
  QbitKitBaseModule,
  QBIT_SIDEMENU_ITEMS,
  QSidemenuItem,
  QLangSelectorModule,
} from 'projects/qbit-kit-ng/src/public-api';
import {
  QbitLocaleConfig,
  QbitLocaleMetadata,
  QBIT_LOCALES,
} from 'projects/qbit-kit-ng/src/lib/components/qbit/components/lang-selector/lang-selector.service';
import { ComponentsComponent } from './components/components.component';

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
    QBreadcrumbsModule,
    QSnackBarModule,
    QSidemenuModule,
    QTableHeaderModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    QbitKitBaseModule,
    TranslateModule.forRoot(),
    BrowserAnimationsModule,
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
  ],
  providers: [
    // CasteUserService,
    // CasteAuthService,
    {
      provide: CASTE_AUTH_CONFIG,
      useValue: {
        realm: 'default',
        url: 'https://api.caste.qbitartifacts.com',
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
        } as QSidemenuItem,
        {
          name: 'components',
          icon: 'home',
          label: 'components',
          route: '/components',
          permission: PermissionPublic,
        } as QSidemenuItem,
        {
          name: 'start',
          icon: 'dashboard',
          label: 'start',
          route: '/',
          permission: PermissionUser,
        } as QSidemenuItem,
      ],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
