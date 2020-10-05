// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CdkTreeModule } from '@angular/cdk/tree';

// Import modules
import { FunctionalModule } from '../components/functional';

// Import components and (re)export components and required services
import { ShowcaseComponent, ShowcasePagesDirective, ShowcaseMenuComponent } from './component';
export { ShowcaseComponent, ShowcasePagesDirective, ShowcaseMenuComponent } from './component';
export { getShowcasePages } from './pages';

/**
 * IQ UI NGX Elements' showcase module
 * Implements an embedded showcase application
 */
@NgModule({
  imports: [
    CommonModule, RouterModule, CdkTreeModule, FunctionalModule
  ],
  declarations: [
    ShowcaseComponent, ShowcasePagesDirective, ShowcaseMenuComponent
  ],
  exports: [
    // Export child components
    ShowcaseComponent, ShowcasePagesDirective, ShowcaseMenuComponent
  ]
})
export class ShowcaseModule { }
