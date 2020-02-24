// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import and (re)export element directives base
import { FormElementDirective } from './directives';
export { FormElementDirective };

// Import and (re)export  element directives
import { FormDirective } from './directives/form';
export { FormDirective };
import { FormGroupDirective } from './directives/group';
export { FormGroupDirective };
import { ButtonDirective } from './directives/button';
export { ButtonDirective };
import { LabelDirective } from './directives/label';
export { LabelDirective };
import { InputDirective } from './directives/input';
export { InputDirective };
import { CheckboxDirective } from './directives/checkbox';
export { CheckboxDirective };
import { RadioDirective } from './directives/radio';
export { RadioDirective };

/**
 * IQ UI NGX Elements' Form elements module
 * Implements components that are mainly meant to be used for user input within forms
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FormElementDirective,
    FormDirective, FormGroupDirective,
    ButtonDirective, LabelDirective, InputDirective, CheckboxDirective, RadioDirective
  ],
  exports: [
    FormElementDirective,
    FormDirective, FormGroupDirective,
    ButtonDirective, LabelDirective, InputDirective, CheckboxDirective, RadioDirective
  ]
})
export class FormModule { }
