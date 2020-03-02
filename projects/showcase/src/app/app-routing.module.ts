import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GettingStartedPageComponent } from '../pages/howto/getting-started/component';
import { TooltipShowcaseComponent } from '../pages/documentation/functional/tooltip';
import { DropdownShowcaseComponent } from '../pages/documentation/functional/dropdown';
import { FormShowcaseComponent } from '../pages/documentation/form/form';
import { InputShowcaseComponent } from '../pages/documentation/form/input';
import { CheckboxShowcaseComponent } from '../pages/documentation/form/checkbox';
import { RadioShowcaseComponent } from '../pages/documentation/form/radio';
import { SelectShowcaseComponent } from '../pages/documentation/form/select';
import { ButtonShowcaseComponent } from '../pages/documentation/basics/button';
import { DropdownButtonShowcaseComponent } from '../pages/documentation/basics/dropdown-button';
import { HighlightJsShowcaseComponent } from '../pages/documentation/code/highlight-js';
import { PlaygroundShowcaseComponent } from '../pages/documentation/code/playground';

const routes: Routes = [
  // Frontpage
  { path: '',                         component: GettingStartedPageComponent },
  // Functional directives and components
  { path: 'functional/tooltip',       component: TooltipShowcaseComponent },
  { path: 'functional/dropdown',      component: DropdownShowcaseComponent },
  // Form components
  { path: 'form/form',                component: FormShowcaseComponent },
  { path: 'form/input',               component: InputShowcaseComponent },
  { path: 'form/checkbox',            component: CheckboxShowcaseComponent },
  { path: 'form/radio',               component: RadioShowcaseComponent },
  { path: 'form/select',              component: SelectShowcaseComponent },
  // Basic components
  { path: 'basics/button',            component: ButtonShowcaseComponent },
  { path: 'basics/dropdown-button',   component: DropdownButtonShowcaseComponent },
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
