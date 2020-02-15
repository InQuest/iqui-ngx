// Getting started page module
// ----------------------------------------------------------------------------

// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import modules
import { ThirdPartyModule } from '../../../../../iqui-ngx-elements/src';

// Import page component
import { GettingStartedPageComponent } from './component';

// IQ UI NGX Elements' Functional elements module
@NgModule({
  imports: [
    CommonModule, ThirdPartyModule
  ],
  declarations: [
    GettingStartedPageComponent
  ],
  exports: [
    GettingStartedPageComponent
  ]
})
export class GettingStartedPageModule { }
