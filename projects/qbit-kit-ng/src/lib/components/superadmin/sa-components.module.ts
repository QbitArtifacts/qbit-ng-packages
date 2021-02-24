import { NgModule } from '@angular/core';
import { SaCommonModule } from '../../common.module';
import { SaAccountSelectorModule } from './selectors/account-selector/account-selector.module';
import { SaAdminAccountSelectorModule } from './selectors/admin-account-selector/admin-account-selector.module';
import { SaCurrentAccountSelectorModule } from './selectors/current-account-selector/current-account-selector.module';
import { SaPermissionsSelectorModule } from './selectors/permissions-selector/permissions-selector.module';

const modules = [
  SaCommonModule,
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
