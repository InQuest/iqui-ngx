// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

// Import dependency modules
import { FunctionalModule } from '../functional';

// Import module registration service instance
import { register } from './register';

// Import components
import './button';
import './dropdown-button';

/**
 * IQ UI NGX Elements' Basic elements module
 * Implements components that are basic building blocks of any application or more-complex component
 */
@NgModule({
  imports:          [ CommonModule, OverlayModule, FunctionalModule ],
  declarations:     [ ...register.declarations ],
  exports:          [ ...register.exports ]
})
export class BasicsModule { }
