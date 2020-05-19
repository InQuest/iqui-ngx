// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextFieldModule } from '@angular/cdk/text-field';

// Import and (re)export element directives base
import { FormElementDirective, IUsesFormElementDirectives, UsesFormElementDirectives } from './directives';
export { FormElementDirective, IUsesFormElementDirectives, UsesFormElementDirectives };

// Import and (re)export element directives
import { FormDirective } from './directives/form';
export { FormDirective };
import { FormGroupDirective } from './directives/group';
export { FormGroupDirective };
import { ButtonDirective } from './directives/button';
export { ButtonDirective };
import { LabelDirective } from './directives/label';
export { LabelDirective };
import { TextareaDirective } from './directives/textarea';
export { TextareaDirective };
import { InputDirective } from './directives/input';
export { InputDirective };
import { CheckboxDirective } from './directives/checkbox';
export { CheckboxDirective };
import { RadioDirective } from './directives/radio';
export { RadioDirective };
import { SelectDirective } from './directives/select';
export { SelectDirective };

// Import and (re)export element components
import { InputComponent, TInputType, InputType } from './components/input';
export { InputComponent, TInputType, InputType };
import { CheckboxComponent } from './components/checkbox';
export { CheckboxComponent };
import { OptionDirective } from './components/option';
export { OptionDirective };
import { RadioComponent } from './components/radio';
export { RadioComponent };
import { SelectComponent } from './components/select';
export { SelectComponent };

/**
 * IQ UI NGX Elements' Form elements module
 * Implements components that are mainly meant to be used for user input within forms
 */
@NgModule({
  imports: [
    CommonModule, TextFieldModule
  ],
  declarations: [
    FormElementDirective,
    FormDirective, FormGroupDirective,
    ButtonDirective, LabelDirective, TextareaDirective, InputDirective, CheckboxDirective, RadioDirective, SelectDirective,
    InputComponent, CheckboxComponent, RadioComponent, SelectComponent, OptionDirective
  ],
  exports: [
    // Export dependency modules
    TextFieldModule,
    // Export child components
    FormElementDirective,
    FormDirective, FormGroupDirective,
    ButtonDirective, LabelDirective, TextareaDirective, InputDirective, CheckboxDirective, RadioDirective, SelectDirective,
    InputComponent, CheckboxComponent, RadioComponent, SelectComponent, OptionDirective
  ]
})
export class FormModule { }
