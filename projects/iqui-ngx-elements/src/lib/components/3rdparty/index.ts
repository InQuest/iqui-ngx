// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import module registration service instance
import { register } from './register';

// Import components
import './highlight-js';

/**
 * IQ UI NGX Elements' 3rd party wrappers module
 * Implements wrappers around useful 3rd party modules
 */
@NgModule({
  imports:          [ CommonModule ],
  declarations:     [ ...register.declarations ],
  exports:          [ ...register.exports ]
})
export class ThirdPartyModule { }
