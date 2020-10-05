// All navigate-able pages
// ----------------------------------------------------------------------------

// Import components dependencies
import { Copy2ClipboardDirective } from '../components/functional';
import { Copy2ClipboardShowcaseComponent } from '../components/functional/_showcase';
import { TooltipDirective } from '../components/functional';
import { TooltipShowcaseComponent } from '../components/functional/_showcase';
import { DropdownDirective } from '../components/functional';
import { DropdownShowcaseComponent } from '../components/functional/_showcase';
import { ModalComponent } from '../components/functional';
import { ModalShowcaseComponent	 } from '../components/functional/_showcase';
import { BookmarkableDirective } from '../components/functional';
import { BookmarkableShowcaseComponent	 } from '../components/functional/_showcase';
import { CollapseDirective } from '../components/functional';
import { CollapseShowcaseComponent	 } from '../components/functional/_showcase';
import { ButtonComponent } from '../components/basics';
import { ButtonShowcaseComponent } from '../components/basics/_showcase';
import { DropdownButtonComponent } from '../components/basics';
import { DropdownButtonShowcaseComponent } from '../components/basics/_showcase';
import { PhraseInputComponent } from '../components/basics';
import { PhraseInputShowcaseComponent } from '../components/basics/_showcase';
import { FormDirective } from '../components/form';
import { FormShowcaseComponent } from '../components/form/_showcase';
import { InputComponent } from '../components/form';
import { InputShowcaseComponent } from '../components/form/_showcase';
import { CheckboxComponent } from '../components/form';
import { CheckboxShowcaseComponent } from '../components/form/_showcase';
import { RadioComponent } from '../components/form';
import { RadioShowcaseComponent } from '../components/form/_showcase';
import { SelectComponent } from '../components/form';
import { SelectShowcaseComponent } from '../components/form/_showcase';
import { HighlightJsComponent } from '../components/code';
import { HighlightJsShowcaseComponent } from '../components/code/_showcase';
import { PlaygroundComponent } from '../components/showcasing';
import { PlaygroundShowcaseComponent } from '../components/showcasing/_showcase';
// Import routing dependencies
import { Page } from '../services/routing';
import { PageServiceShowcaseComponent } from '../services/routing/_showcase';
// Import data dependencies
import { Phrase } from '../data';
import { PhraseShowcaseComponent } from '../data/_showcase';
import { Pagination } from '../data';
import { PaginationShowcaseComponent } from '../data/_showcase';
// Import pipe dependencies
import { FilterPipe } from '../pipes';
import { FilterShowcaseComponent } from '../pipes/_showcase';
import { SortPipe } from '../pipes';
import { SortShowcaseComponent } from '../pipes/_showcase';
import { PaginatePipe } from '../pipes';
import { PaginateShowcaseComponent } from '../pipes/_showcase';
import { SlicePipe } from '../pipes';
import { SliceShowcaseComponent } from '../pipes/_showcase';

// (Re)export Page class
export { Page };

// Compose pages structure
const pages = [
  new Page ('controls', 'Controls', 'Components and Directives', null, [

    new Page ('primitives', 'Primitive controls', 'Primitive building blocks for building up other more complex components', null, [
      new Page ('functional', 'Functional', 'Directives and Components providing basic, reusable functionality', null, [
        Page.fromClass(Copy2ClipboardDirective, Copy2ClipboardShowcaseComponent),
        Page.fromClass(TooltipDirective, TooltipShowcaseComponent),
        Page.fromClass(DropdownDirective, DropdownShowcaseComponent),
        Page.fromClass(CollapseDirective, CollapseShowcaseComponent),
        Page.fromClass(ModalComponent, ModalShowcaseComponent),
        Page.fromClass(BookmarkableDirective, BookmarkableShowcaseComponent)
      ]),
      new Page ('form', 'Forms', 'Extension of HTML <form /> and related HTML child elements', null, [
        Page.fromClass(FormDirective, FormShowcaseComponent),
        Page.fromClass(InputComponent, InputShowcaseComponent),
        Page.fromClass(CheckboxComponent, CheckboxShowcaseComponent),
        Page.fromClass(RadioComponent, RadioShowcaseComponent),
        Page.fromClass(SelectComponent, SelectShowcaseComponent)
      ]),
    ]),

    new Page ('composite', 'Composite controls', 'Composite controls, built up from primitives, implement complex functionality', null, [
      new Page ('basics', 'Basic controls', 'Simpler composite controls', null, [
        Page.fromClass(ButtonComponent, ButtonShowcaseComponent),
        Page.fromClass(DropdownButtonComponent, DropdownButtonShowcaseComponent),
        Page.fromClass(PhraseInputComponent, PhraseInputShowcaseComponent)
      ])
    ]),

    new Page ('code', 'Code', 'Components used for visualizing code and code syntax.', null, [
      Page.fromClass(HighlightJsComponent, HighlightJsShowcaseComponent)
    ]),

    new Page ('showcase', 'Showcasing', 'Components and services used for quickly building "showcase" apps.', null, [
      Page.fromClass(PlaygroundComponent, PlaygroundShowcaseComponent)
    ]),

  ]),

  new Page ('pipes', 'Pipes', 'Pipes', null, [
    Page.fromClass(FilterPipe, FilterShowcaseComponent),
    Page.fromClass(SortPipe, SortShowcaseComponent),
    Page.fromClass(PaginatePipe, PaginateShowcaseComponent),
    Page.fromClass(SlicePipe, SliceShowcaseComponent)
  ]),

  new Page ('data', 'Data Classes', 'Data classes', null, [
    Page.fromClass(Page, PageServiceShowcaseComponent),
    Page.fromClass(Phrase, PhraseShowcaseComponent),
    Page.fromClass(Pagination, PaginationShowcaseComponent)
  ]),
];

/**
 * Composes showcase pages structure and definitions
 */
export function getShowcasePages (): Page[] {
  // Return pages structure
  return pages;
}
