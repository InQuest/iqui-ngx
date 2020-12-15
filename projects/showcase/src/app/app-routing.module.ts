// Application routing
// ----------------------------------------------------------------------------

// Import dependencies
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page, getShowcasePages } from '../../../iqui-ngx/src/public-api';

// Import pages
import { GettingStartedPageComponent } from './getting-started/component';
export { GettingStartedPageComponent } from './getting-started/component';

// Application routes
const routes: Routes = [
  // Frontpage
  { path: '', component: GettingStartedPageComponent },
  // Component pages
  ...Page.compileRoutes(getShowcasePages(), []),
  // Default
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
