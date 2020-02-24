// Form Showcase module
// ----------------------------------------------------------------------------

// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import modules
import { PlaygroundModule } from '../../../components/playground.module';
import { FormModule, ThirdPartyModule } from '../../../../../iqui-ngx-elements/src';

// Import showcase components
import { FormShowcaseComponent } from './form';

// IQ UI NGX Elements' Basic elements module
@NgModule({
  imports: [
    CommonModule, PlaygroundModule, FormModule, ThirdPartyModule
  ],
  declarations: [
    FormShowcaseComponent
  ],
  exports: [
    FormShowcaseComponent
  ]
})
export class BasicsShowcaseModule { }
