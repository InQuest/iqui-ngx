// 3rd party Showcase module
// ----------------------------------------------------------------------------

// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import modules
import { PlaygroundModule } from '../../../components/playground.module';
import { BasicsModule, ThirdPartyModule } from '../../../../../iqui-ngx-elements/src';

// Import showcase components
import { HighlightJsShowcaseComponent } from './highlight-js';

// IQ UI NGX Elements' Basic elements module
@NgModule({
  imports: [
    CommonModule, PlaygroundModule, BasicsModule, ThirdPartyModule
  ],
  declarations: [
    HighlightJsShowcaseComponent
  ],
  exports: [
    HighlightJsShowcaseComponent
  ]
})
export class ThirdPartyShowcaseModule { }
