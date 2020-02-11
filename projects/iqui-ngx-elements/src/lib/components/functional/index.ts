// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

// Import module registration service instance
import { register } from './register';

// Import components
import './tooltip';
import './dropdown';

/**
 * IQ UI NGX Elements' Functional elements module
 * Implements functional directives that augment behavior of their parent element or component
 */
@NgModule({
  imports:          [ CommonModule, OverlayModule ],
  declarations:     [ ...register.declarations ],
  exports:          [ ...register.exports ]
})
export class FunctionalModule { }
