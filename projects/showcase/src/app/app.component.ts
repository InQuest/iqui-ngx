// Main application component
// ----------------------------------------------------------------------------

// Import dependencies
import { Component, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NestedTreeControl } from '@angular/cdk/tree';
import { ArrayDataSource } from '@angular/cdk/collections';
import { Page, pages } from './app-pages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  /**
   * Application title
   */
  public title = 'InQuest UI Showcase';

  /**
   * Main menu links tree control
   */
  public tree = new NestedTreeControl<Page>(node => node.children);
  /**
   * Main menu links tree pages
   */
  public get pages () { return new ArrayDataSource(pages); }
  /**
   * Checks if page has children
   */
  public hasChildren = (_: number, page: Page) => Page.hasChildren(page);

  constructor (private _router: Router) {
    // On route change
    this._router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {

        // Flatten all pages
        const flatPages = Page.toArray(pages);

        // (Un)mark all routes
        flatPages.forEach(page => page.meta.active = false);

        // Expand and mark active route
        let selected = flatPages.find(page => (`/${page.path.join('/')}` === e.url));
        while (selected?.parent) {
          selected.meta.active = selected.parent.meta.active = true;
          this.tree.expand((selected = selected.parent));
        }

      }
    });
  }
}
