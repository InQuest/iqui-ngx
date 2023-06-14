// Phrase input component showcase
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';
import { Phrase } from '../../../../data';

// Import modules
import { BasicsModule } from '../../';

// Showcase component
@Component({
  selector: 'iqui-showcase-phrase-input-component',
  templateUrl: `./index.html`,
  styleUrls: [`./style.scss`],
})
export class PhraseInputShowcaseComponent {
  // Expose modules needed to render syntax
  public modules = [BasicsModule];

  // Playground context
  public context = {
    Phrase: new Phrase(),
    Placeholder: 'Enter phrase here',
  };
}
