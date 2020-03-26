// Application routing
// ----------------------------------------------------------------------------

// Import dependencies
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GettingStartedPageComponent } from '../pages/howto/getting-started/component';
import { Page, pages } from './app-pages';

// Application routes
const routes: Routes = [
  // Frontpage
  { path: '',   component: GettingStartedPageComponent },
  // Component pages
  ...Page.compileRoutes(pages),
  // Default
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
