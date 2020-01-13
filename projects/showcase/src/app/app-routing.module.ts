import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonShowcaseComponent } from '../showcases/basics/button';
import { TooltipShowcaseComponent } from '../showcases/functional/tooltip';

const routes: Routes = [
  // Functional directives and components
  { path: 'functional/tooltip', component: TooltipShowcaseComponent },
  // Basic components
  { path: 'basics/button', component: ButtonShowcaseComponent },
  // Default
  { path: '**', redirectTo: '/basics/button' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
