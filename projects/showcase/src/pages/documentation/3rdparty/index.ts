// 3rd party Showcase module
// ----------------------------------------------------------------------------

// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import modules
import { PlaygroundModule } from '../../../components/playground.module';
import { BasicsModule } from '../../../../../iqui-ngx-elements/src/lib/components/basics/';
import { ThirdPartyModule } from '../../../../../iqui-ngx-elements/src/lib/components/3rdparty';

// Import module registration service instance
import { register } from './register';

// Import showcase components
import './highlight-js';

// IQ UI NGX Elements' Basic elements module
@NgModule({
  imports:      [ CommonModule, PlaygroundModule, BasicsModule, ThirdPartyModule ],
  declarations: [ ...register.declarations ],
  exports:      [ ...register.exports ]
})
export class ThirdPartyShowcaseModule { }
