// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import modules
import { PlaygroundModule } from '../../components/playground.module';
import { BasicsModule } from '../../../../iqui-ngx-elements/src/lib/components/basics/iqui-ngx-basics.module';
import { ThirdPartyModule } from '../../../../iqui-ngx-elements/src/lib/components/3rdparty/iqui-ngx-3rdparty.module';

// Import showcase components
import { HighlightJsShowcaseComponent } from './highlight-js';

// Compose components
const components = [
  HighlightJsShowcaseComponent
];

// IQ UI NGX Elements' Basic elements module
@NgModule({
  imports:      [ CommonModule, PlaygroundModule, BasicsModule, ThirdPartyModule ],
  declarations: [ ...components ],
  exports:      [ ...components ]
})
export class ThirdPartyShowcaseModule { }
