// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import modules
import { PlaygroundModule } from '../../components/playground.module';
import { ThirdPartyModule } from '../../../../iqui-ngx-elements/src/lib/components/3rdparty/iqui-ngx-3rdparty.module';
import { BasicsModule } from '../../../../iqui-ngx-elements/src/lib/components/basics/iqui-ngx-basics.module';
import { FunctionalModule } from '../../../../iqui-ngx-elements/src/lib/components/functional/iqui-ngx-functional.module';

// Import showcase components
import { TooltipShowcaseComponent } from './tooltip';
import { DropdownShowcaseComponent } from './dropdown';

// Compose components
const components = [
  TooltipShowcaseComponent,
  DropdownShowcaseComponent
];

// IQ UI NGX Elements' Functional elements module
@NgModule({
  imports:      [ CommonModule, PlaygroundModule, ThirdPartyModule, BasicsModule, FunctionalModule ],
  declarations: [ ...components ],
  exports:      [ ...components ]
})
export class FunctionalShowcaseModule { }
