// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import playground components
import { PlaygroundComponent, PlaygroundShowcaseDirective } from './playground';

// IQ UI NGX Elements' Basic elements module
@NgModule({
  imports:      [ CommonModule ],
  declarations: [ PlaygroundComponent, PlaygroundShowcaseDirective ],
  exports:      [ PlaygroundComponent, PlaygroundShowcaseDirective ]
})
export class PlaygroundModule { }
