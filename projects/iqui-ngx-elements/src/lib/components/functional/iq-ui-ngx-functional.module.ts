// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

// Import components
import { TooltipDirective, TooltipDirectiveEntryComponents } from './tooltip';

// Compose components
const components = [
  TooltipDirective, ...TooltipDirectiveEntryComponents
];

// Compose dynamic components
const entryComponents = [
  ...TooltipDirectiveEntryComponents
];

// IQ UI NGX Elements' Functional elements module
@NgModule({
  imports:          [ CommonModule, OverlayModule ],
  declarations:     [ ...components ],
  entryComponents:  [ ...entryComponents ],
  exports:          [ ...components ]
})
export class FunctionalModule { }
