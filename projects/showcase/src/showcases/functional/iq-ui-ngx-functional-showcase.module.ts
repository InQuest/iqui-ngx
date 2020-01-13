// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import modules
import { PlaygroundModule } from '../../components/playground.module';
import { BasicsModule } from '../../../../iqui-ngx-elements/src/lib/components/basics/iq-ui-ngx-basics.module';
import { FunctionalModule } from '../../../../iqui-ngx-elements/src/lib/components/functional/iq-ui-ngx-functional.module';

// Import showcase components
import { TooltipShowcaseComponent } from './tooltip';

// Compose components
const components = [
  TooltipShowcaseComponent
];

// IQ UI NGX Elements' Functional elements module
@NgModule({
  imports:      [ CommonModule, PlaygroundModule, BasicsModule, FunctionalModule ],
  declarations: [ ...components ],
  exports:      [ ...components ]
})
export class FunctionalShowcaseModule { }
