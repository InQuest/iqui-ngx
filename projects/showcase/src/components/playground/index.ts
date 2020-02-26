import '@angular/compiler';
import {
  Compiler, NgModuleRef, NgModule,
  Component, OnInit, OnChanges, AfterViewInit, OnDestroy,
  Input, ElementRef, ComponentRef, ViewChild, ViewContainerRef,
  ChangeDetectorRef, Injector
} from '@angular/core';

/**
 * Renders an interactive demo for a component/directive
 *
 * Usage:
 *
 *  <iqui-playground [context]="{ test: 123 }">
 *    <textarea ngNonBindable>
 *      <div> Code example: {{ context.test }} </div>
 *    </textarea>
 *  </iqui-playground>
 */
@Component({
  selector: 'iqui-playground',
  templateUrl: './index.html',
  styleUrls: ['./style.scss']
})
export class PlaygroundComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  constructor (
    private _compiler: Compiler,
    private _injector: Injector,
    private _module: NgModuleRef<any>,
    private _cd: ChangeDetectorRef
  ) {}

  /**
   * Syntax to render/display (if not passed via <textarea /> through component content)
   */
  @Input()
  public syntax: string = null;

  /**
   * NgModules needed to render given syntax
   */
  @Input()
  public modules: any[] = [];

  /**
   * Interactive configuration definition for the component being demoed
   */
  @Input()
  public context = {};

  /**
   * Reference to pass-through syntax element
   */
  @ViewChild('syntax', { read: ElementRef })
  private _syntaxEl: ElementRef;

  /**
   * Holds reference to the output host element for (dynamically created) playground example component
   */
  @ViewChild('example', { read: ViewContainerRef, static: true })
  private _exampleHostEl: ViewContainerRef;

  /**
   * Holds breakdown for all context properties
   */
  public _context = {};
  /**
   * Holds keys of all context properties
   */
  public _contextKeys = [];
  /**
   * Holds value syntax for all context properties
   */
  public _contextSyntax = {};
  /**
   * Holds selected value for all context properties
   */
  public _contextSelected = {};

  /**
   * Holds reference to (dynamically created) playground example component
   */
  private _exampleComponent: ComponentRef<any>;

  /**
   * Holds processed component usage syntax
   */
  public _usageSyntax: string;

  public ngOnInit () {
    // Process configuration
    this._processConfig();
  }

  public ngAfterViewInit () {
    // Check if single <textarea /> child
    if (this.syntax) {
      // Load and process syntax
      this._processSyntax(this.syntax);
    // tslint:disable-next-line: max-line-length
    } else if ((this._syntaxEl.nativeElement.children.length === 1) && (this._syntaxEl.nativeElement.children[0].tagName.toLowerCase() === 'textarea')) {
      // Load and process syntax
      this._processSyntax(this._syntaxEl.nativeElement.children[0].value);
    } else {
      // Throw error
      // tslint:disable-next-line: max-line-length
      throw new Error('<iqui-playground /> components need sto be called with [syntax] attribute or a single <textarea /> child element containing syntax!');
    }
  }

  public ngOnChanges () {
    // Process configuration
    this._processConfig();
  }

  public ngOnDestroy () {
    if (this._exampleComponent) {
      // Destroy dynamically added components
      this._exampleComponent.destroy();
    }
  }

  /**
   * Process provided configuration
   */
  private _processConfig () {

    // Reset context
    this._context = {};
    this._contextKeys = [];
    this._contextSyntax = {};
    this._contextSelected = {};

    // Recompose context
    for (const key in this.context) {
      if (this.context.hasOwnProperty(key)) {

        // Get context property
        this._contextKeys.push(key);
        const value = this.context[key];

        // Initialize breakdown
        if (!this._context[key]) { this._context[key] = {}; }

        // Get context property type
        let type: string = (this._context[key].type = typeof value);
        if (type === 'object' && value instanceof Array) {
          type = (this._context[key].type = 'array');
        }

        // Generate selection syntax
        if (type === 'array') {
          const syntax = value.map(item => this._stringify(item));
          this._contextSyntax[key] = this._context[key].syntax = `${key}: (${ syntax.join('|') })`;
        } else {
          this._contextSyntax[key] = this._context[key].syntax = `${key}: ${this._context[key].type}`;
        }

        // (Pre)select value and options
        if (type === 'array') {
          this._context[key].options = value;
          this._contextSelected[key] = this._context[key].selected = (value.length ? value[0] : null);
        } else {
          this._contextSelected[key] = this._context[key].selected = value;
        }

      }
    }

    // Trigger change detection
    this._triggerDynamicComponentsChangeDetection();

  }

  /**
   * Processes playground component syntax into a code syntax TemplateRef and an Example TemplateRef
   * @param syntax Component syntax to process
   */
  private _processSyntax (syntax) {

    // Set usage syntax
    this._usageSyntax = syntax;
    for (const key in this._context) {
      if (this._context.hasOwnProperty(key)) {
        this._usageSyntax = this._usageSyntax.replace(new RegExp(`context.${key}`, 'g'), this._contextSyntax[key]);
      }
    }

    // Destroy previously dynamically added components
    this._exampleHostEl.clear();
    if (this._exampleComponent) {
      this._exampleComponent.destroy();
    }

    // Create dynamic component
    const dynamicComponentClass = Component({ template: syntax })(
      class {
        constructor () {}
        public context: any = {};
      }
    );

    // Create dynamic module
    const dynamicModuleClass = NgModule({
      imports: [...this.modules],
      declarations: [dynamicComponentClass],
    })(class {});

    // Create and inject dynamically created component
    this._compiler.compileModuleAndAllComponentsAsync(dynamicModuleClass)
      .then((factories) => {

        // Inject component
        const factory = factories.componentFactories[0];
        this._exampleComponent = factory.create(this._injector, [], null, this._module);
        this._exampleHostEl.insert(this._exampleComponent.hostView);

        // Trigger change detection
        this._triggerDynamicComponentsChangeDetection();

      });

    // Trigger change detection
    this._cd.detectChanges();
  }

  /**
   * Updates selected values /while replacing the entire containing hash-map to trigger change detection
   * @param key Key to update
   * @param value Updated value
   */
  public _updateSelected (key, value) {

    // Update selected values
    this._contextSelected = { ...this._contextSelected };
    this._contextSelected[key] = value;

    // Trigger change detection
    this._triggerDynamicComponentsChangeDetection();

  }

  /**
   * Triggers change detection on injected dynamic components
   */
  private _triggerDynamicComponentsChangeDetection () {
    if (this._exampleComponent) {
      this._exampleComponent.instance.context = {...this._contextSelected};
      // this._exampleComponent.instance._cd.detectChanges();
    }
  }

  /**
   * Gets string representation of value
   * @param value Value to stringify
   * @returns String representation of value
   */
  private _stringify (value) {
    if (value === undefined) {
      return 'undefined';
     } else if (value === null ) {
       return 'null';
    } else {
      return JSON.stringify(value).replace(/"/g, '\'');
    }
  }

}
