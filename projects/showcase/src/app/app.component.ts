// Main application component
// ----------------------------------------------------------------------------

// Import dependencies
import { Component, ViewEncapsulation } from '@angular/core';
import { Page, getShowcasePages } from '../../../iqui-ngx/src/public-api';
import { GettingStartedPageComponent } from './getting-started/component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /**
   * Ready injected pages
   */
  public _gettingStartedPages = [new Page('getting-started', 'Getting started', 'Getting started', GettingStartedPageComponent)];

  /**
   * Ready injected pages
   */
  public _iquiNgxPages = getShowcasePages();
}
