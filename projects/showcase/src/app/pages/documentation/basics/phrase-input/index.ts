// Phrase input component showcase
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';
import { BasicsModule, Phrase } from '../../../../../../../iqui-ngx/src/public-api';


// Showcase component
@Component({
  templateUrl:  `./index.html`,
  styleUrls:    [`./style.scss`]
})
export class PhraseInputShowcaseComponent {

  // Expose modules needed to render syntax
  public modules = [BasicsModule];

  // Playground context
  public context = {
    Phrase:      new Phrase(),
    Placeholder: 'Enter phrase here'
  };

}
