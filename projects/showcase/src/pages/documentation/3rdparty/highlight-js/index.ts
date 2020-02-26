// Button component showcase
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';
import { BasicsModule, ThirdPartyModule, highlightJsRegisterLanguage } from '../../../../../../iqui-ngx-elements/src';

// Register highlight.js languages
import { default as javascript } from 'highlight.js/lib/languages/javascript';
highlightJsRegisterLanguage('javascript', javascript);
import { default as xml } from 'highlight.js/lib/languages/xml';
highlightJsRegisterLanguage('xml', xml);
import { default as css } from 'highlight.js/lib/languages/css';
highlightJsRegisterLanguage('css', css);
import { default as scss } from 'highlight.js/lib/languages/scss';
highlightJsRegisterLanguage('scss', scss);

// Showcase component
@Component({
  templateUrl:  `./index.html`,
  styleUrls:    [`./style.scss`]
})
export class HighlightJsShowcaseComponent {

  // Expose modules needed to render syntax
  public modules = [BasicsModule, ThirdPartyModule];

  // Playground context
  public context = {
    Syntax:       '<div> Hello world! </div>',
    Language:     ['xml', 'css', 'javascript', undefined],
    Filter:       undefined,
    Highlight:    [true, false],
    Wrap:         [true, false],
    Trim:         [true, false],
    LineNumbers:  [true, false]
  };

}
