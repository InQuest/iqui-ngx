// Functional Showcase module
// ----------------------------------------------------------------------------

// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import modules
import { PlaygroundModule } from '../../../components/playground.module';
import { ThirdPartyModule } from '../../../../../iqui-ngx-elements/src/lib/components/3rdparty';
import { BasicsModule } from '../../../../../iqui-ngx-elements/src/lib/components/basics';
import { FunctionalModule } from '../../../../../iqui-ngx-elements/src/lib/components/functional';

// Import module registration service instance
import { register } from './register';

// Import showcase components
import './tooltip';
import './dropdown';

// IQ UI NGX Elements' Functional elements module
@NgModule({
  imports:      [ CommonModule, PlaygroundModule, ThirdPartyModule, BasicsModule, FunctionalModule ],
  declarations: [ ...register.declarations ],
  exports:      [ ...register.exports ]
})
export class FunctionalShowcaseModule { }
