// Showcasing Showcase module
// ----------------------------------------------------------------------------

// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import modules
import { CodeModule, ShowcasingModule } from '../../../../../iqui-ngx-elements/src';

// Import showcase components
import { PageServiceShowcaseComponent } from './page';
import { PlaygroundShowcaseComponent } from './playground';

// IQ UI NGX Elements' Showcasing module
@NgModule({
  imports: [
    CommonModule, CodeModule, ShowcasingModule
  ],
  declarations: [
    PageServiceShowcaseComponent,
    PlaygroundShowcaseComponent
  ],
  exports: [
    PageServiceShowcaseComponent,
    PlaygroundShowcaseComponent
  ]
})
export class ShowcasingShowcaseModule { }
