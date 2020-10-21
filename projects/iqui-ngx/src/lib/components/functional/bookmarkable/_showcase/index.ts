// Bookmarkable directive showcase
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';

// Import modules
import { FunctionalModule } from '../../../functional';

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
