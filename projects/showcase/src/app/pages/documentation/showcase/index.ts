// Showcasing Showcase module
// ----------------------------------------------------------------------------

// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import modules
import { CodeModule, ShowcasingModule } from '../../../../../../iqui-ngx/src/public-api';

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
    // Export dependency modules
    CodeModule, ShowcasingModule,
    // Export child components
    PageServiceShowcaseComponent,
    PlaygroundShowcaseComponent
  ]
})
export class ShowcasingShowcaseModule { }
