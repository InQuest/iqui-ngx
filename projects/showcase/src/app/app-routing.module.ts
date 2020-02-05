import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonShowcaseComponent } from '../showcases/basics/button';
import { DropdownButtonShowcaseComponent } from '../showcases/basics/dropdown-button';
import { TooltipShowcaseComponent } from '../showcases/functional/tooltip';
import { DropdownShowcaseComponent } from '../showcases/functional/dropdown';

const routes: Routes = [
  // Functional directives and components
  { path: 'functional/tooltip', component: TooltipShowcaseComponent },
  { path: 'functional/dropdown', component: DropdownShowcaseComponent },
  // Basic components
  { path: 'basics/button', component: ButtonShowcaseComponent },
  { path: 'basics/dropdown-button', component: DropdownButtonShowcaseComponent },
  // Default
  { path: '**', redirectTo: '/basics/button' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
