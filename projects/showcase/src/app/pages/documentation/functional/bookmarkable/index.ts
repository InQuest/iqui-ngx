// Bookmarkable directive showcase
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';
import { FunctionalModule } from '../../../../../../../iqui-ngx/src/public-api';

// Showcase component
@Component({
  templateUrl:  `./index.html`,
  styleUrls:    [`./style.scss`]
})
export class BookmarkableShowcaseComponent {

  // Expose modules needed to render syntax
  public modules = [FunctionalModule];

  // Playground context
  public context = {
    BookmarkA: 'bookmark-a',
    BookmarkB: 'bookmark-b',
    BookmarkC: 'bookmark-c',
  };

}
