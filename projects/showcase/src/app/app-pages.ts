// All navigate-able pages
// ----------------------------------------------------------------------------

// Import dependencies
import { Page } from '../../../iqui-ngx-elements/src';
import { TooltipShowcaseComponent } from '../pages/documentation/functional/tooltip';
import { DropdownShowcaseComponent } from '../pages/documentation/functional/dropdown';
import { FormShowcaseComponent } from '../pages/documentation/form/form';
import { InputShowcaseComponent } from '../pages/documentation/form/input';
import { CheckboxShowcaseComponent } from '../pages/documentation/form/checkbox';
import { RadioShowcaseComponent } from '../pages/documentation/form/radio';
import { SelectShowcaseComponent } from '../pages/documentation/form/select';
import { ButtonShowcaseComponent } from '../pages/documentation/basics/button';
import { DropdownButtonShowcaseComponent } from '../pages/documentation/basics/dropdown-button';
import { HighlightJsShowcaseComponent } from '../pages/documentation/code/highlight-js';
import { PlaygroundShowcaseComponent } from '../pages/documentation/showcase/playground';

// (Re)export Page class
export { Page };

// Component pages definitions
export const pages: Page[] = [
  new Page ('functional',       'Functional directives', null, [
    new Page ('tooltip',          '[iqui-tooltip]',         TooltipShowcaseComponent),
    new Page ('dropdown',         '[iqui-dropdown]',        DropdownShowcaseComponent)
  ]),
  new Page ('form',             'Forms', null, [
    new Page ('form',             'form[iquiForm] *',       FormShowcaseComponent),
    new Page ('input',            '<iqui-input />',         InputShowcaseComponent),
    new Page ('checkbox',         '<iqui-checkbox />',      CheckboxShowcaseComponent),
    new Page ('radio',            '<iqui-radio />',         RadioShowcaseComponent),
    new Page ('select',           '<iqui-select />',        SelectShowcaseComponent)
  ]),
  new Page ('basics',           'Basic controls', null, [
    new Page ('button',           '<iq-button />',          ButtonShowcaseComponent),
    new Page ('dropdown-button',  '<iq-dropdown-button />', DropdownButtonShowcaseComponent)
  ]),
  new Page ('code',             'Code', null, [
    new Page ('highlight-js',     '<iq-highlightjs />',     HighlightJsShowcaseComponent)
  ]),
  new Page ('showcase',         'Showcasing', null, [
    new Page ('playground',       '<iq-playground />',      PlaygroundShowcaseComponent)
  ])
];

