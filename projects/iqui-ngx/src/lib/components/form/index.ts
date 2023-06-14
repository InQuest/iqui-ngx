// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextFieldModule } from '@angular/cdk/text-field';

// Import and (re)export element directives base
import { FormElementDirective, IUsesFormElementDirectives, UsesFormElementDirectives } from './directives';
export { FormElementDirective, IUsesFormElementDirectives, UsesFormElementDirectives };

// Import and (re)export element directives
import { FormDirective } from './directives/form';
export { FormDirective } from './directives/form';
import { FormGroupDirective } from './directives/group';
export { FormGroupDirective } from './directives/group';
import { ButtonDirective } from './directives/button';
export { ButtonDirective } from './directives/button';
import { LabelDirective } from './directives/label';
export { LabelDirective } from './directives/label';
import { TextareaDirective } from './directives/textarea';
export { TextareaDirective } from './directives/textarea';
import { InputDirective } from './directives/input';
export { InputDirective } from './directives/input';
import { CheckboxDirective } from './directives/checkbox';
export { CheckboxDirective } from './directives/checkbox';
import { RadioDirective } from './directives/radio';
export { RadioDirective } from './directives/radio';
import { SelectDirective } from './directives/select';
export { SelectDirective } from './directives/select';

// Import and (re)export element components
import { InputComponent, TInputType, InputType } from './components/input';
export { InputComponent, TInputType, InputType } from './components/input';
import { CheckboxComponent } from './components/checkbox';
export { CheckboxComponent } from './components/checkbox';
import { OptionDirective } from './components/option';
export { OptionDirective } from './components/option';
import { RadioComponent } from './components/radio';
export { RadioComponent } from './components/radio';
import { SelectComponent } from './components/select';
export { SelectComponent } from './components/select';

/**
 * IQ UI NGX Elements' Form elements module
 * Implements components that are mainly meant to be used for user input within forms
 */
@NgModule({
  imports: [CommonModule, TextFieldModule],
  declarations: [
    // FormElementDirective,
    FormDirective,
    FormGroupDirective,
    ButtonDirective,
    LabelDirective,
    TextareaDirective,
    InputDirective,
    CheckboxDirective,
    RadioDirective,
    SelectDirective,
    InputComponent,
    CheckboxComponent,
    RadioComponent,
    SelectComponent,
    OptionDirective,
  ],
  exports: [
    // Export angular dependencies
    CommonModule,
    // Export dependency modules
    TextFieldModule,
    // Export child components
    // FormElementDirective,
    FormDirective,
    FormGroupDirective,
    ButtonDirective,
    LabelDirective,
    TextareaDirective,
    InputDirective,
    CheckboxDirective,
    RadioDirective,
    SelectDirective,
    InputComponent,
    CheckboxComponent,
    RadioComponent,
    SelectComponent,
    OptionDirective,
  ],
})
export class FormModule {}
