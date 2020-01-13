// Import dependencies
import { NgModule } from '@angular/core';

// Import modules
import { FunctionalModule } from './components/functional/iq-ui-ngx-functional.module';
import { BasicsModule } from './components/basics/iq-ui-ngx-basics.module';

// IQ UI NGX Elements' ROOT module
@NgModule({
  imports: [
    // Import individual modules
    FunctionalModule,
    BasicsModule
  ],
  declarations: [],
  exports: [
    // (Re)export individual modules, making them included into any app the root module is included in
    FunctionalModule,
    BasicsModule
  ]
})
export class IqUiNgxElementsModule { }
