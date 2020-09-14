// All navigate-able pages
// ----------------------------------------------------------------------------

// Import dependencies
import { Phrase } from '../../../iqui-ngx/src/public-api';
import { PhraseShowcaseComponent } from './pages/documentation/data/Phrase';
import { Pagination } from '../../../iqui-ngx/src/public-api';
import { PaginationShowcaseComponent } from './pages/documentation/data/Pagination';
import { FilterPipe } from '../../../iqui-ngx/src/public-api';
import { FilterShowcaseComponent } from './pages/documentation/pipes/Filter';
import { SortPipe } from '../../../iqui-ngx/src/public-api';
import { SortShowcaseComponent } from './pages/documentation/pipes/Sort';
import { PaginatePipe } from '../../../iqui-ngx/src/public-api';
import { PaginateShowcaseComponent } from './pages/documentation/pipes/Paginate';
import { SlicePipe } from '../../../iqui-ngx/src/public-api';
import { SliceShowcaseComponent } from './pages/documentation/pipes/Slice';
import { Copy2ClipboardDirective } from '../../../iqui-ngx/src/public-api';
import { Copy2ClipboardShowcaseComponent } from './pages/documentation/functional/copy2clipboard';
import { TooltipDirective } from '../../../iqui-ngx/src/public-api';
import { TooltipShowcaseComponent } from './pages/documentation/functional/tooltip';
import { DropdownDirective } from '../../../iqui-ngx/src/public-api';
import { DropdownShowcaseComponent } from './pages/documentation/functional/dropdown';
import { ModalComponent } from '../../../iqui-ngx/src/public-api';
import { ModalShowcaseComponent	 } from './pages/documentation/functional/modal';
import { BookmarkableDirective } from '../../../iqui-ngx/src/public-api';
import { BookmarkableShowcaseComponent	 } from './pages/documentation/functional/bookmarkable';
import { CollapseDirective } from '../../../iqui-ngx/src/public-api';
import { CollapseShowcaseComponent	 } from './pages/documentation/functional/collapse';
import { FormDirective } from '../../../iqui-ngx/src/public-api';
import { FormShowcaseComponent } from './pages/documentation/form/form';
import { InputComponent } from '../../../iqui-ngx/src/public-api';
import { InputShowcaseComponent } from './pages/documentation/form/input';
import { CheckboxComponent } from '../../../iqui-ngx/src/public-api';
import { CheckboxShowcaseComponent } from './pages/documentation/form/checkbox';
import { RadioComponent } from '../../../iqui-ngx/src/public-api';
import { RadioShowcaseComponent } from './pages/documentation/form/radio';
import { SelectComponent } from '../../../iqui-ngx/src/public-api';
import { SelectShowcaseComponent } from './pages/documentation/form/select';
import { ButtonComponent } from '../../../iqui-ngx/src/public-api';
import { ButtonShowcaseComponent } from './pages/documentation/basics/button';
import { DropdownButtonComponent } from '../../../iqui-ngx/src/public-api';
import { DropdownButtonShowcaseComponent } from './pages/documentation/basics/dropdown-button';
import { PhraseInputComponent } from '../../../iqui-ngx/src/public-api';
import { PhraseInputShowcaseComponent } from './pages/documentation/basics/phrase-input';
import { HighlightJsComponent } from '../../../iqui-ngx/src/public-api';
import { HighlightJsShowcaseComponent } from './pages/documentation/code/highlight-js';
import { Page } from '../../../iqui-ngx/src/public-api';
import { PageServiceShowcaseComponent } from './pages/documentation/showcase/page';
import { PlaygroundComponent } from '../../../iqui-ngx/src/public-api';
import { PlaygroundShowcaseComponent } from './pages/documentation/showcase/playground';

// (Re)export Page class
export { Page };

// Component pages definitions
export const pages: Page[] = [

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
      Page.fromClass(Page, PageServiceShowcaseComponent),
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
    Page.fromClass(Phrase, PhraseShowcaseComponent),
    Page.fromClass(Pagination, PaginationShowcaseComponent)
  ]),

];

