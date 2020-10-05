// Main application component
// ----------------------------------------------------------------------------

// Import dependencies
import { Component, ViewEncapsulation, ContentChildren, QueryList } from '@angular/core';
import { Page } from '../../services';

// Import showcase page structure
import { getShowcasePages } from '../pages';

// Import and (re)export child components and directives
import { ShowcasePagesDirective } from './directives';
export { ShowcasePagesDirective } from './directives';
export { ShowcaseMenuComponent } from './components';

@Component({
  selector: 'iqui-showcase',
  templateUrl: './index.html',
  styleUrls: ['./style.scss']
})
export class ShowcaseComponent {

  /**
   * Holds pages structure and definitions
   */
  public _pages: Page[];

  /**
   * Holds additional page groups
   */
  @ContentChildren(ShowcasePagesDirective, { read: ShowcasePagesDirective })
  public _groups: QueryList<ShowcasePagesDirective>;

  constructor () {
    // Get pages structure and definitions
    this._pages = getShowcasePages();
  }
}
