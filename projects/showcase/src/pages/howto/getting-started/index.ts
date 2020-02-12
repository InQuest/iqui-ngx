// Getting started page module
// ----------------------------------------------------------------------------

// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import modules
import { ThirdPartyModule } from '../../../../../iqui-ngx-elements/src/lib/components/3rdparty';


// Import module registration service instance
import { register } from './register';

// IQ UI NGX Elements' Functional elements module
@NgModule({
  imports:      [ CommonModule, ThirdPartyModule ],
  declarations: [ ...register.declarations ],
  exports:      [ ...register.exports ]
})
export class GettingStartedPageModule { }
