// Getting started page module
// ----------------------------------------------------------------------------

// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import modules
import { CodeModule } from '../../../../iqui-ngx/src/public-api';

// Import page component
import { GettingStartedPageComponent } from './component';

// IQ UI NGX Elements' Functional elements module
@NgModule({
  imports: [CommonModule, CodeModule],
  declarations: [GettingStartedPageComponent],
  exports: [GettingStartedPageComponent],
})
export class GettingStartedPageModule {}
