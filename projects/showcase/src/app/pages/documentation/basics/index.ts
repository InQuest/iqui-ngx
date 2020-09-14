// Basics Showcase module
// ----------------------------------------------------------------------------

// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import modules
import { BasicsModule, CodeModule, ShowcasingModule } from '../../../../../../iqui-ngx/src/public-api';

// Import showcase components
import { ButtonShowcaseComponent } from './button';
import { DropdownButtonShowcaseComponent } from './dropdown-button';
import { PhraseInputShowcaseComponent } from './phrase-input';

// IQ UI NGX Elements' Basic elements module
@NgModule({
  imports: [
    CommonModule, BasicsModule, CodeModule, ShowcasingModule
  ],
  declarations: [
    ButtonShowcaseComponent,
    DropdownButtonShowcaseComponent,
    PhraseInputShowcaseComponent
  ],
  exports: [
    // Export dependency modules
    BasicsModule, CodeModule, ShowcasingModule,
    // Export child components
    ButtonShowcaseComponent,
    DropdownButtonShowcaseComponent,
    PhraseInputShowcaseComponent
  ]
})
export class BasicsShowcaseModule { }
