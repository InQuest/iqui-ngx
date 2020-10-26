// Toast component showcase
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';
import { ToastRelativePositioning } from '../';

// Import modules
import { FunctionalModule } from '../../';
import { BasicsModule } from '../../../basics';
import { CodeModule } from '../../../code';

// Showcase component
@Component({
  templateUrl: `./index.html`,
  styleUrls: [`./style.scss`],
})
export class ToastShowcaseComponent {
  // Expose modules needed to render syntax
  public modules = [FunctionalModule, BasicsModule, CodeModule];

  // Toast context
  public context = {
    Visible: [true, false],
    Position: Object.values(ToastRelativePositioning),
    HeaderHtml: 'This is a toast',
    ContentHtml: '... a real, real toast!',
  };
}
