// Button component showcase
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';
import { HighlightJsComponent } from '../../../../../iqui-ngx-elements/src/lib/components/3rdparty/highlight-js';

// Register highlight.js languages
import { default as javascript } from 'highlight.js/lib/languages/javascript';
HighlightJsComponent.registerLanguage('javascript', javascript);
import { default as xml } from 'highlight.js/lib/languages/xml';
HighlightJsComponent.registerLanguage('xml', xml);
import { default as css } from 'highlight.js/lib/languages/css';
HighlightJsComponent.registerLanguage('css', css);

// Showcase component
@Component({
  selector:     'iqui-highlightjs-showcase',
  templateUrl:  `./index.html`,
  styleUrls:    [`./style.scss`]
})
export class HighlightJsShowcaseComponent {

  // Playground attribute values
  public attributes = {
    languages:    ['xml', 'css', 'javascript', ''],
    filter:       '',
    highlight:    [true, false],
    wrap:         [true, false],
    trim:         [true, false],
    lineNumbers:  [true, false]
  };

  // Playground content
  public content = '<div> Hello world! </div>';

}
