// Page definition
// ----------------------------------------------------------------------------

/**
 * Holds basic page information
 */
export class Page {
  /**
   * Generates a page from a Directive, Component or service class
   * @param descriptor Directive, Component or service class to be described
   * @param component Page component implementing the described page
   * @returns Page representing and linking to the target
   */
  public static fromClass(descriptor, component = null) {
    const directiveDecorator = descriptor.decorators?.find(decorator => decorator.type.prototype.ngMetadataName === 'Directive'),
      componentDecorator = descriptor.decorators?.find(decorator => decorator.type.prototype.ngMetadataName === 'Component');
    if (directiveDecorator) {
      // Compose directive page
      const name = descriptor.name.toLowerCase().replace(/directive/g, ''),
        selector = directiveDecorator.args.find(arg => arg.selector)?.selector || `[${name}]`;
      return new Page(name, selector, null, component || descriptor);
    } else if (componentDecorator) {
      // Compose component page
      const name = descriptor.name.toLowerCase().replace(/component/g, ''),
        selector = `<${componentDecorator.args.find(arg => arg.selector)?.selector || `${name}`} />`;
      return new Page(name, selector, null, component || descriptor);
    } else {
      // Compose service page
      const name = descriptor.name.replace(/Service/g, '').replace(/Pipe/g, '');
      return new Page(name, name, null, component || descriptor);
    }
  }

  /**
   * Composes routes from pages definitions
   * @param pages Pages definition
   * @param path Root path of current pages
   * @returns Composed routes
   */
  // tslint:disable-next-line: no-shadowed-variable
  public static compileRoutes(pages, path = []) {
    // Update pages' route paths
    for (const page of pages) {
      page.setParentPath(path);
    }
    // Compile routes
    return Page._compileRoutes(pages, path, []);
  }

  /**
   * Composes routes from pages definitions
   * @param pages Pages definition
   * @param path Relative path of current pages
   * @param routes Array of composed routes
   * @returns Composed routes
   */
  // tslint:disable-next-line: no-shadowed-variable
  private static _compileRoutes(pages, path = [], routes = []) {
    // Process pages
    for (const page of pages) {
      // If page has component, add to routes
      if (page.component) {
        routes.push({
          path: [...path, page.name].join('/'),
          component: page.component,
        });
      }
      // If page has children, process children
      if (page.children.length) {
        Page._compileRoutes(page.children, [...path, page.name], routes);
      }
    }
    // Return composed routes
    return routes;
  }

  /**
   * Flattens aray of pages and their children into a flat array
   * @param pages Pages array to flatten
   * @returns Flat page array
   */
  public static toArray(pages: Page[]) {
    const arr = [];
    for (const page of pages) {
      arr.push(page, ...Page.toArray(page.children));
    }
    return arr;
  }

  /**
   * Checks if page has children
   * @param page Page to check
   * @returns If page has children
   */
  public static hasChildren(page: Page) {
    return page.children && page.children.length;
  }

  /**
   * Creates an instance of Page.
   * @param name Page unique name (used in URL)
   * @param title Page title (displayed in menu)
   * @param title Page description (displayed in menu tooltip)
   * @param component Page component
   * @param children Child pages
   */
  constructor(name: string, title: string, description: string, component = null, children = [] as Page[]) {
    // Set page info
    this.name = name;
    this.title = title;
    this.description = description;
    this.component = component;
    this.children = children;
    // Update child paths
    this.refreshChildren();
  }

  /**
   * Page unique name (used in URL)
   */
  public name: string;
  /**
   * Page title (displayed in menu)
   */
  public title: string;
  /**
   * Page description (displayed in menu tooltip)
   */
  public description: string;
  /**
   * Page component
   */
  public component: any;
  /**
   * Child pages
   */
  public children: Page[];
  /**
   * Can hold various metadata about the page
   */
  public meta = {} as any;

  // Holds parent reference
  private _parent: Page;
  /**
   * Get parent reference
   */
  public get parent() {
    return this._parent;
  }

  // Holds parent path
  private _parentPath: string[] = [];
  /**
   * Composes path from parent set path and name
   */
  public get path() {
    return [...this._parentPath, this.name];
  }
  /**
   * Sets parent path
   * @param path Parent path
   */
  public setParentPath(path: string[]) {
    // Set parent path
    this._parentPath = path;
    // When path refreshed, propagate to children
    this.refreshChildren();
  }

  /**
   * Update child paths
   */
  private refreshChildren() {
    this.children.forEach(child => {
      child._parent = this;
      child.setParentPath(this.path);
    });
  }
}
