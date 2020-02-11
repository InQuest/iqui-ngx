// Module registration service instance
// ----------------------------------------------------------------------------

/**
 * Acts as a central registration point for module declarations, providing a way to
 * keep module registration code along side the component/directive/pipe/etc being registered
 */
export class ModuleRegistrationService {

  // Holds registered module declarations
  private innerDeclarations = [];
  // Gets registered module declarations
  public get declarations () { return this.innerDeclarations; }

  // Holds additional module exports
  private innerExports = [];
  // Gets additional module exports
  public get exports () { return this.innerExports; }

  // Registers module declarations and sets it as a module export
  public registerDeclarationAndExport (...declaration: any) {
    this.innerDeclarations.push(...declaration);
    this.innerExports.push(...declaration);
  }

  // Registers module declarations
  public registerDeclaration (...declaration: any) {
    this.innerDeclarations.push(...declaration);
  }

  // Registers a declaration as a module export
  public registerExport (...declaration: any) {
    this.innerExports.push(...declaration);
  }

}
