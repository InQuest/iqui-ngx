import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GettingStartedPageComponent } from '../pages/howto/getting-started/component';
import { TooltipShowcaseComponent } from '../pages/documentation/functional/tooltip';
import { DropdownShowcaseComponent } from '../pages/documentation/functional/dropdown';
import { ButtonShowcaseComponent } from '../pages/documentation/basics/button';
import { DropdownButtonShowcaseComponent } from '../pages/documentation/basics/dropdown-button';
import { HighlightJsShowcaseComponent } from '../pages/documentation/3rdparty/highlight-js';

const routes: Routes = [
  // Frontpage
  { path: '',                         component: GettingStartedPageComponent },
  // Functional directives and components
  { path: 'functional/tooltip',       component: TooltipShowcaseComponent },
  { path: 'functional/dropdown',      component: DropdownShowcaseComponent },
  // Basic components
  { path: 'basics/button',            component: ButtonShowcaseComponent },
  { path: 'basics/dropdown-button',   component: DropdownButtonShowcaseComponent },
  // 4rd party wrappers
  { path: '3rdparty/highlight-js',    component: HighlightJsShowcaseComponent },
  // Default
  { path: '**',                       redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
