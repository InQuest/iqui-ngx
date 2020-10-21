// Declare directive
// ----------------------------------------------------------------------------

// Import dependencies
import { Directive, OnChanges, SimpleChanges, Input, TemplateRef, ViewContainerRef } from '@angular/core';

/**
 * Declare directive, evaluates and exposes given value/expression on tho the scope
 *
 * Usage:
 *
 * <ng-container *iquiDeclare="1 + 2 as sum">
 *   The sum is: {sum}
 * </ng-container>
 *
 */
@Directive({
  selector: '[iquiDeclare]',
})
export class DeclareDirective implements OnChanges {

  constructor (
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) {
  }

  @Input('iquiDeclare')
  public _syntax;

  public ngOnChanges (c: SimpleChanges) {
    // Promote value to view
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.templateRef, { iquiDeclare: c._syntax.currentValue });
  }

}
