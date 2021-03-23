import { NgModule } from '@angular/core';
import { SaAdminAccountSelectorModule } from './components/superadmin/selectors/admin-account-selector/admin-account-selector.module';
import { SaApplicationSelectorModule } from './components/superadmin/selectors/application-selector/application-selector.module';
import { SaCurrentAccountSelectorModule } from './components/superadmin/selectors/current-account-selector/current-account-selector.module';
import { SaPermissionsSelectorModule } from './components/superadmin/selectors/permissions-selector/permissions-selector.module';
import { SaUserSelectorModule } from './components/superadmin/selectors/user-selector/user-selector.module';
import { SaCommonModule } from './sa-common.module';

const modules = [
  SaCommonModule,
  SaAdminAccountSelectorModule,
  SaCurrentAccountSelectorModule,
  SaPermissionsSelectorModule,
  SaUserSelectorModule,
  SaApplicationSelectorModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class SaComponentsModule {}
