// All navigate-able pages
// ----------------------------------------------------------------------------

// Import dependencies
import { Page } from '../../../iqui-ngx-elements/src';
import { TooltipDirective } from '../../../iqui-ngx-elements/src';
import { TooltipShowcaseComponent } from '../pages/documentation/functional/tooltip';
import { DropdownDirective } from '../../../iqui-ngx-elements/src';
import { DropdownShowcaseComponent } from '../pages/documentation/functional/dropdown';
import { FormDirective } from '../../../iqui-ngx-elements/src';
import { FormShowcaseComponent } from '../pages/documentation/form/form';
import { InputComponent } from '../../../iqui-ngx-elements/src';
import { InputShowcaseComponent } from '../pages/documentation/form/input';
import { CheckboxComponent } from '../../../iqui-ngx-elements/src';
import { CheckboxShowcaseComponent } from '../pages/documentation/form/checkbox';
import { RadioComponent } from '../../../iqui-ngx-elements/src';
import { RadioShowcaseComponent } from '../pages/documentation/form/radio';
import { SelectComponent } from '../../../iqui-ngx-elements/src';
import { SelectShowcaseComponent } from '../pages/documentation/form/select';
import { ButtonComponent } from '../../../iqui-ngx-elements/src';
import { ButtonShowcaseComponent } from '../pages/documentation/basics/button';
import { DropdownButtonComponent } from '../../../iqui-ngx-elements/src';
import { DropdownButtonShowcaseComponent } from '../pages/documentation/basics/dropdown-button';
import { HighlightJsComponent } from '../../../iqui-ngx-elements/src';
import { HighlightJsShowcaseComponent } from '../pages/documentation/code/highlight-js';
import { PlaygroundComponent } from '../../../iqui-ngx-elements/src';
import { PlaygroundShowcaseComponent } from '../pages/documentation/showcase/playground';

// (Re)export Page class
export { Page };

// Component pages definitions
export const pages: Page[] = [

  new Page ('primitives', 'Primitive controls', 'Primitive building blocks for building up other more complex components,', null, [
    new Page ('functional', 'Functional directives', 'Directives providing functionality to any HTML element,', null, [
      Page.fromClass(TooltipDirective, TooltipShowcaseComponent),
      Page.fromClass(DropdownDirective, DropdownShowcaseComponent),
    ]),
    new Page ('form', 'Forms', 'Extension of standard <form /> and related HTML elements,', null, [
      Page.fromClass(FormDirective, FormShowcaseComponent),
      Page.fromClass(InputComponent, InputShowcaseComponent),
      Page.fromClass(CheckboxComponent, CheckboxShowcaseComponent),
      Page.fromClass(RadioComponent, RadioShowcaseComponent),
      Page.fromClass(SelectComponent, SelectShowcaseComponent)
    ]),
  ]),

  new Page ('composite', 'Composite controls', 'Composite controls, built up from primitives, implement complex functionality,', null, [
    new Page ('basics', 'Basic controls', 'Simpler composite controls', null, [
      Page.fromClass(ButtonComponent, ButtonShowcaseComponent),
      Page.fromClass(DropdownButtonComponent, DropdownButtonShowcaseComponent),
    ])
  ]),

  new Page ('code', 'Code', 'Components used for visualizing code and code syntax.', null, [
    Page.fromClass(HighlightJsComponent, HighlightJsShowcaseComponent),
  ]),

  new Page ('showcase', 'Showcasing', 'Components and services used for quickly building "showcase" apps.', null, [
    Page.fromClass(PlaygroundComponent, PlaygroundShowcaseComponent),
  ])

];

