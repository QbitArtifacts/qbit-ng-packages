import { NgModule } from '@angular/core';
import { QCommonModule } from './common.module';
import { SaAccountSelectorModule } from './components/superadmin/selectors/account-selector/account-selector.module';
import { SaAdminAccountSelectorModule } from './components/superadmin/selectors/admin-account-selector/admin-account-selector.module';
import { SaCurrentAccountSelectorModule } from './components/superadmin/selectors/current-account-selector/current-account-selector.module';
import { SaPermissionsSelectorModule } from './components/superadmin/selectors/permissions-selector/permissions-selector.module';

const modules = [
  QCommonModule,
  SaAccountSelectorModule,
  SaAdminAccountSelectorModule,
  SaCurrentAccountSelectorModule,
  SaPermissionsSelectorModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class SaComponentsModule {}
