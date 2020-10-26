// Form element directive base
// ----------------------------------------------------------------------------

// Import dependencies
import { Subscription } from 'rxjs';
import { Directive, OnInit, OnChanges, OnDestroy, Input, HostBinding, Output, EventEmitter, Host, Optional, SkipSelf, ElementRef } from '@angular/core';
import { TBootstrapSize, BootstrapSize } from '../../../types';

/**
 * Defines component as using form directives internally inside its template. Will expose [iquiFormParent] attribute
 * through which the implementing component can pass explicit reference to outside scope parent FormElementDirectiveFormElementDirective
 */
export interface IUsesFormElementDirectives {
  /**
   * Accepts explicit reference to parent FormElementDirective
   */
  iquiFormParent: FormElementDirective;
}

/**
 * Defines component as using form directives internally inside its template. Will expose [iquiFormParent] attribute
 * through which the implementing component can pass explicit reference to outside scope parent FormElementDirectiveFormElementDirective
 */
@Directive()
export class UsesFormElementDirectives implements IUsesFormElementDirectives {
  constructor(
    // (Optional) Injected parent directive element
    @Host()
    @SkipSelf()
    @Optional()
    public _formParent: FormElementDirective,
  ) {}

  /**
   * Accepts explicit reference to parent FormElementDirective
   */
  @Input()
  public iquiFormParent: FormElementDirective;

  /**
   * Gets reference to explicitly passed or injected reference to outside scope parent FormElementDirectiveFormElementDirective
   */
  public get _iquiFormParent() {
    return this.iquiFormParent || this._formParent;
  }
}

/**
 * Form element decorator, registers a directive/component as interactive with iquiForm directive
 * @param isolateId If true, will give element and its children their own ID scope
 * @param className Base class og the element, applied if not present and used to generate additional styling subs-classes
 * @param idAttributeName Name if attribute to bind ID value to (commonly used for "for"/"id" association)
 * @param bindDisabled If true, will apply disabled status set to the directive/component or one of its parents
 * @param bindSize  If true, will apply size value set to the directive/component or one of its parents
 * @param bindValid If true, will apply validation status set to the directive/component or one of its parents
 */
export function FormElement({
  isolateId = false,
  className = null as string | string[],
  idAttributeName = null as string | string[],
  bindDisabled = false,
  bindSize = false,
  bindValid = false,
}) {
  // tslint:disable-next-line: only-arrow-functions
  return function (directiveClass) {
    directiveClass.__formElementAnnotation = {
      isolateId,
      className,
      idAttributeName,
      bindDisabled,
      bindSize,
      bindValid,
    };
  };
}

/**
 * Extendable Form container class
 */
@Directive({
  selector: 'form[iquiForm]',
})
@FormElement({})
export class FormElementDirective implements IUsesFormElementDirectives, OnInit, OnChanges, OnDestroy {
  //#region Static

  // Holds next unique ID to be used
  private static _id = 1;

  //#endregion

  //#region Constructor

  constructor(
    // Directive host element
    protected _el: ElementRef,
    // (Optional) Parent directive element
    @Host() @SkipSelf() @Optional() protected _parent: FormElementDirective,
  ) {}

  //#endregion

  //#region Events

  /**
   * Triggers when element applies changes
   */
  @Output()
  protected _applied = new EventEmitter();

  /**
   * Subscription to parent's "applied" event
   */
  private _appliedSubscription: Subscription;

  //#endregion

  //#region Properties

  /**
   * Gets @FormElement decorator's annotations
   */
  protected get formControlAnnotation() {
    return (this.constructor as any).__formElementAnnotation;
  }

  /**
   * Unique ID for the container
   */
  public _id: number;
  /**
   * Unique ID for the parent container (if parent found)
   */
  protected get _parentId() {
    return this._parent ? this._parent._id || this._parent._parentId : null;
  }
  /**
   * Unique IDs for all parent containers (if parents found)
   */
  protected get _parentIds() {
    const ids = [];
    let parent: FormElementDirective = this;
    // tslint:disable-next-line: no-conditional-assignment
    do {
      if (parent._id) {
        ids.push(parent._id);
      }
    } while ((parent = parent._parent));
    return ids;
  }

  /**
   * If element needs to initialize as form container even if not contained by another [iqui] element
   */
  @Input()
  public iquiForm = false;

  /**
   * Explicitly set parent (To be used by other components needing to detect
   * parent manually from outside scope and pass it into their templates)
   */
  @Input()
  public iquiFormParent: FormElementDirective;

  /**
   * If element should have its own ID scope
   */
  @Input()
  public isolateId = true;

  /**
   * [disabled] binding for all child components
   */
  @Input()
  @HostBinding('disabled')
  public disabled: boolean = undefined;
  /**
   * Gets [disabled] binding, inherited from parent form containers
   */
  protected get _inheritedDisabled() {
    if (this.disabled === true || this.disabled === false) {
      return this.disabled;
    } else {
      return this._parent ? this._parent._inheritedDisabled : false;
    }
  }

  /**
   * Bootstrap theme size to be used by all child component
   */
  @Input()
  public size: TBootstrapSize = undefined;
  /**
   * Gets [size] binding, inherited from parent form containers
   */
  protected get _inheritedSize() {
    return this.size || this.size === null || (this._parent ? this._parent._inheritedSize : null);
  }

  /**
   * Bootstrap validation status
   */
  @Input()
  public valid: boolean = undefined;
  /**
   * Gets [valid] binding, inherited from parent form containers
   */
  protected get _inheritedValid() {
    if (this.valid === null || this.valid === true || this.valid === false) {
      return this.valid;
    } else {
      return this._parent ? this._parent._inheritedValid : null;
    }
  }

  //#endregion

  //#region Private methods

  public ngOnInit() {
    // Check if explicitly passed parent
    if (this.iquiFormParent) {
      this._parent = this.iquiFormParent;
    }

    // Subscribe to parent's events
    if (this._parent) {
      // Subscribe to "applied" event
      this._appliedSubscription = this._parent._applied.subscribe(() => {
        // Apply self when parent applied
        this.apply();
      });
    }

    // Apply form control modifications
    this.apply();
  }

  public ngOnChanges() {
    // Apply form control modifications
    this.apply();
  }

  public ngOnDestroy() {
    // Unsubscribe from parent's events
    if (this._appliedSubscription) {
      this._appliedSubscription.unsubscribe();
    }
  }

  /**
   * Gets if element or any of it's parents is marked as [iqui] and needs to initialize as form container
   */
  private get shouldInitializeBindings() {
    return this.iquiForm !== false || (this._parent ? this._parent.shouldInitializeBindings : false);
  }

  /**
   * Gets if element should initialize its own ID scope
   */
  private get shouldInitializeIdScope() {
    return this.formControlAnnotation.isolateId && this.isolateId;
  }

  /**
   * Applies bindings and styling to element
   */
  protected apply() {
    // If (relative) isolateId container, set unique ID for instance
    if (this.shouldInitializeIdScope) {
      this._id = FormElementDirective._id++;
    }

    // Initialize if isolateId form directive, or if has isolateId as parent
    if (this.shouldInitializeBindings) {
      // Set ".iqui" class to allow selecting only if iqui directive applied
      // tslint:disable-next-line: max-line-length
      this._el.nativeElement.classList.add(this.formControlAnnotation.className ? `iqui-${this.formControlAnnotation.className}` : 'iqui');

      // Set base class
      if (this.formControlAnnotation.className) {
        this._el.nativeElement.classList.add(this.formControlAnnotation.className);
      }

      // Inherit common container ID to be referenced by any labels
      if (this.formControlAnnotation.idAttributeName) {
        const parentId = this._parentId,
          idAttributeName = this.formControlAnnotation.idAttributeName;
        if (parentId) {
          for (const id of idAttributeName instanceof Array ? idAttributeName : [idAttributeName]) {
            this._el.nativeElement.setAttribute(id, `unique-id-${parentId}`);
          }
        }
      }

      // Inherit disabled status from parent container
      if (this.formControlAnnotation.bindDisabled) {
        this._el.nativeElement.disabled = this._inheritedDisabled;
      }

      // Inherit size from parent container
      if (this.formControlAnnotation.bindSize) {
        const className = this.formControlAnnotation.className;
        for (const name of className instanceof Array ? className : [className]) {
          // Remove existing sizes
          for (const size of Object.values(BootstrapSize)) {
            this._el.nativeElement.classList.remove(`${name}-${size}`);
          }
          // Set size
          const inheritedSize = this._inheritedSize;
          if (inheritedSize) {
            this._el.nativeElement.classList.add(`${name}-${inheritedSize}`);
          }
        }
      }

      // Inherit validation from parent container
      if (this.formControlAnnotation.bindValid) {
        // Clear existing validation
        this._el.nativeElement.classList.remove('is-valid');
        this._el.nativeElement.classList.remove('is-invalid');
        // Set validation
        const inheritedValidation = this._inheritedValid;
        if (inheritedValidation === true || inheritedValidation === false) {
          this._el.nativeElement.classList.add(inheritedValidation ? 'is-valid' : 'is-invalid');
        }
      }
    }

    // Trigger "applied" event
    this._applied.emit();
  }

  //#endregion
}
