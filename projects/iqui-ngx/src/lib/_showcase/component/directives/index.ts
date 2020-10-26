// Showcase component's directives
// ----------------------------------------------------------------------------

// Import dependencies
import { Directive, Input } from '@angular/core';
import { Page } from '../../../services';

/**
 * When child of <iqui-showcase /> component, allows for defining additional page groups
 *
 * Usage:
 *
 * <ng-container [iqui-showcase-pages]="pages" [title]="'Getting started'">
 *  Addition page groups
 * </ng-container>
 */
@Directive({
  selector: '[iqui-showcase-pages]',
})
export class ShowcasePagesDirective {
  /**
   * Holds page group's page definitions
   */
  @Input('iqui-showcase-pages')
  public pages: Page[];

  /**
   * Holds page group's title
   */
  @Input()
  public title: string;
}
