// Functional Showcase module
// ----------------------------------------------------------------------------

// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import modules
import { FunctionalModule, BasicsModule, CodeModule, ShowcasingModule } from '../../../../../../iqui-ngx/src';

// Import showcase components
import { TooltipShowcaseComponent } from './tooltip';
import { DropdownShowcaseComponent } from './dropdown';
import { CollapseShowcaseComponent } from './collapse';
import { ModalShowcaseComponent } from './modal';

// IQ UI NGX Elements' Functional elements module
@NgModule({
  imports: [
    CommonModule, BasicsModule, FunctionalModule, CodeModule, ShowcasingModule
  ],
  declarations: [
    TooltipShowcaseComponent,
    DropdownShowcaseComponent,
    CollapseShowcaseComponent,
    ModalShowcaseComponent
  ],
  exports: [
    // Export dependency modules
    BasicsModule, FunctionalModule, CodeModule, ShowcasingModule,
    // Export child components
    TooltipShowcaseComponent,
    DropdownShowcaseComponent,
    CollapseShowcaseComponent,
    ModalShowcaseComponent
  ]
})
export class FunctionalShowcaseModule { }
