// Routing Showcase module
// ----------------------------------------------------------------------------

// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import modules
import { ShowcasingModule } from '../../components/showcasing';
import { CodeModule } from '../../components/code';

// Import showcase components
import { PageServiceShowcaseComponent } from './page/_showcase';
export { PageServiceShowcaseComponent } from './page/_showcase';

// IQ UI NGX Elements' Showcasing module
@NgModule({
  imports: [CommonModule, CodeModule, ShowcasingModule],
  declarations: [PageServiceShowcaseComponent],
  exports: [
    // Export dependency modules
    CodeModule,
    ShowcasingModule,
    // Export child components
    PageServiceShowcaseComponent,
  ],
})
export class RoutingShowcaseModule {}
