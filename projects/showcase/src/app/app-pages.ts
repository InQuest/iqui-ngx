// All navigate-able pages
// ----------------------------------------------------------------------------

// Import dependencies
import { TooltipDirective } from '../../../ngx-iqui/src';
import { TooltipShowcaseComponent } from './pages/documentation/functional/tooltip';
import { DropdownDirective } from '../../../ngx-iqui/src';
import { DropdownShowcaseComponent } from './pages/documentation/functional/dropdown';
import { ModalComponent } from '../../../ngx-iqui/src';
import { ModalShowcaseComponent	 } from './pages/documentation/functional/modal';
import { FormDirective } from '../../../ngx-iqui/src';
import { FormShowcaseComponent } from './pages/documentation/form/form';
import { InputComponent } from '../../../ngx-iqui/src';
import { InputShowcaseComponent } from './pages/documentation/form/input';
import { CheckboxComponent } from '../../../ngx-iqui/src';
import { CheckboxShowcaseComponent } from './pages/documentation/form/checkbox';
import { RadioComponent } from '../../../ngx-iqui/src';
import { RadioShowcaseComponent } from './pages/documentation/form/radio';
import { SelectComponent } from '../../../ngx-iqui/src';
import { SelectShowcaseComponent } from './pages/documentation/form/select';
import { ButtonComponent } from '../../../ngx-iqui/src';
import { ButtonShowcaseComponent } from './pages/documentation/basics/button';
import { DropdownButtonComponent } from '../../../ngx-iqui/src';
import { DropdownButtonShowcaseComponent } from './pages/documentation/basics/dropdown-button';
import { HighlightJsComponent } from '../../../ngx-iqui/src';
import { HighlightJsShowcaseComponent } from './pages/documentation/code/highlight-js';
import { Page } from '../../../ngx-iqui/src';
import { PageServiceShowcaseComponent } from './pages/documentation/showcase/page';
import { PlaygroundComponent } from '../../../ngx-iqui/src';
import { PlaygroundShowcaseComponent } from './pages/documentation/showcase/playground';

// (Re)export Page class
export { Page };

// Component pages definitions
export const pages: Page[] = [

  new Page ('primitives', 'Primitive controls', 'Primitive building blocks for building up other more complex components,', null, [
    new Page ('functional', 'Functional', 'Directives and Components providing basic, reusable functionality,', null, [
      Page.fromClass(TooltipDirective, TooltipShowcaseComponent),
      Page.fromClass(DropdownDirective, DropdownShowcaseComponent),
      Page.fromClass(ModalComponent, ModalShowcaseComponent)
    ]),
    new Page ('form', 'Forms', 'Extension of HTML <form /> and related HTML child elements,', null, [
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
      Page.fromClass(DropdownButtonComponent, DropdownButtonShowcaseComponent)
    ])
  ]),

  new Page ('code', 'Code', 'Components used for visualizing code and code syntax.', null, [
    Page.fromClass(HighlightJsComponent, HighlightJsShowcaseComponent)
  ]),

  new Page ('showcase', 'Showcasing', 'Components and services used for quickly building "showcase" apps.', null, [
    Page.fromClass(Page, PageServiceShowcaseComponent),
    Page.fromClass(PlaygroundComponent, PlaygroundShowcaseComponent)
  ])

];

