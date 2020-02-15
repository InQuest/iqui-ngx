// Functional Showcase module
// ----------------------------------------------------------------------------

// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import modules
import { PlaygroundModule } from '../../../components/playground.module';
import { FunctionalModule, BasicsModule, ThirdPartyModule } from '../../../../../iqui-ngx-elements/src';

// Import showcase components
import { TooltipShowcaseComponent } from './tooltip';
import { DropdownShowcaseComponent } from './dropdown';

// IQ UI NGX Elements' Functional elements module
@NgModule({
  imports: [
    CommonModule, PlaygroundModule, ThirdPartyModule, BasicsModule, FunctionalModule
  ],
  declarations: [
    TooltipShowcaseComponent,
    DropdownShowcaseComponent
  ],
  exports: [
    TooltipShowcaseComponent,
    DropdownShowcaseComponent
  ]
})
export class FunctionalShowcaseModule { }
