// Import dependencies
import { NgModule } from '@angular/core';

// Import modules
import { FunctionalModule } from './components/functional/iqui-ngx-functional.module';
import { BasicsModule } from './components/basics/iqui-ngx-basics.module';
import { ThirdPartyModule } from './components/3rdparty/iqui-ngx-3rdparty.module';

/**
 * IQ UI NGX Elements' module
 * InQuest NGX reusable Elements based of Angular material CDK and Bootstrap
 */
@NgModule({
  imports: [
    // Import individual modules
    FunctionalModule,
    BasicsModule,
    ThirdPartyModule
  ],
  declarations: [],
  exports: [
    // (Re)export individual modules, making them included into any app the root module is included in
    FunctionalModule,
    BasicsModule,
    ThirdPartyModule
  ]
})
export class IqUiNgxElementsModule { }
