// Main application component
// ----------------------------------------------------------------------------

// Import dependencies
import { Component, ViewEncapsulation, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NestedTreeControl } from '@angular/cdk/tree';
import { ArrayDataSource } from '@angular/cdk/collections';
import { Page } from '../../../../services';

@Component({
  selector: 'iqui-showcase-menu',
  templateUrl: './index.html',
  styleUrls: ['./style.scss'],
})
export class ShowcaseMenuComponent {
  /**
   * Holds page group's pages structure and definitions
   */
  @Input()
  public pages: Page[];

  /**
   * Holds page group's title
   */
  @Input()
  public title: string;

  /**
   * Main menu links tree control
   */
  public _tree = new NestedTreeControl<Page>(node => node.children);
  /**
   * Main menu links tree pages
   */
  public get _treeDataSource() {
    return new ArrayDataSource(this.pages);
  }
  /**
   * Checks if page has children
   */
  public _hasChildren = (_: number, page: Page) => Page.hasChildren(page);

  constructor(private _router: Router) {
    // On route change
    this._router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        // Flatten all pages
        const flatPages = Page.toArray(this.pages);

        // (Un)mark all routes
        flatPages.forEach(page => (page.meta.active = false));

        // Expand and mark active route
        let selected = flatPages.find(page => `/${page.path.join('/')}` === e.url);
        while (selected?.parent) {
          selected.meta.active = selected.parent.meta.active = true;
          this._tree.expand((selected = selected.parent));
        }
      }
    });
  }
}
