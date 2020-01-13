// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

// Import components
import { ButtonComponent } from './button';

// Compose components
const components = [
  ButtonComponent
];

// Compose dynamic components
const entryComponents = [];

// IQ UI NGX Elements' Basic elements module
@NgModule({
  imports:          [ CommonModule, OverlayModule ],
  declarations:     [ ...components ],
  entryComponents:  [ ...entryComponents ],
  exports:          [ ...components ]
})
export class BasicsModule { }
