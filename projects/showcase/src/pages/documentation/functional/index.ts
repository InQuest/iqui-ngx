// Functional Showcase module
// ----------------------------------------------------------------------------

// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import modules
import { FunctionalModule, BasicsModule, CodeModule, ShowcasingModule } from '../../../../../iqui-ngx-elements/src';

// Import showcase components
import { TooltipShowcaseComponent } from './tooltip';
import { DropdownShowcaseComponent } from './dropdown';
import { ModalShowcaseComponent } from './modal';

// IQ UI NGX Elements' Functional elements module
@NgModule({
  imports: [
    CommonModule, BasicsModule, FunctionalModule, CodeModule, ShowcasingModule
  ],
  declarations: [
    TooltipShowcaseComponent,
    DropdownShowcaseComponent,
    ModalShowcaseComponent
  ],
  exports: [
    TooltipShowcaseComponent,
    DropdownShowcaseComponent,
    ModalShowcaseComponent
  ]
})
export class FunctionalShowcaseModule { }
