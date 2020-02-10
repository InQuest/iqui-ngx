import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TooltipShowcaseComponent } from '../showcases/functional/tooltip';
import { DropdownShowcaseComponent } from '../showcases/functional/dropdown';
import { ButtonShowcaseComponent } from '../showcases/basics/button';
import { DropdownButtonShowcaseComponent } from '../showcases/basics/dropdown-button';
import { HighlightJsShowcaseComponent } from '../showcases/3rdparty/highlight-js';

const routes: Routes = [
  // Functional directives and components
  { path: 'functional/tooltip',       component: TooltipShowcaseComponent },
  { path: 'functional/dropdown',      component: DropdownShowcaseComponent },
  // Basic components
  { path: 'basics/button',            component: ButtonShowcaseComponent },
  { path: 'basics/dropdown-button',   component: DropdownButtonShowcaseComponent },
  // 4rd party wrappers
  { path: '3rdparty/highlight-js',    component: HighlightJsShowcaseComponent },
  // Default
  { path: '**',                       redirectTo: '/basics/button' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
