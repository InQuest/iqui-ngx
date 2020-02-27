import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GettingStartedPageComponent } from '../pages/howto/getting-started/component';
import { TooltipShowcaseComponent } from '../pages/documentation/functional/tooltip';
import { DropdownShowcaseComponent } from '../pages/documentation/functional/dropdown';
import { ButtonShowcaseComponent } from '../pages/documentation/basics/button';
import { DropdownButtonShowcaseComponent } from '../pages/documentation/basics/dropdown-button';
import { FormShowcaseComponent } from '../pages/documentation/form/form';
import { HighlightJsShowcaseComponent } from '../pages/documentation/code/highlight-js';
import { PlaygroundShowcaseComponent } from '../pages/documentation/code/playground';

const routes: Routes = [
  // Frontpage
  { path: '',                         component: GettingStartedPageComponent },
  // Functional directives and components
  { path: 'functional/tooltip',       component: TooltipShowcaseComponent },
  { path: 'functional/dropdown',      component: DropdownShowcaseComponent },
  // Basic components
  { path: 'basics/button',            component: ButtonShowcaseComponent },
  { path: 'basics/dropdown-button',   component: DropdownButtonShowcaseComponent },
  // Form components
  { path: 'form/form',                component: FormShowcaseComponent },
  // 4rd party wrappers
  { path: 'code/highlight-js',        component: HighlightJsShowcaseComponent },
  { path: 'code/playground',          component: PlaygroundShowcaseComponent },
  // Default
  { path: '**',                       redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
