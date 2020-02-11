// Button component showcase
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';
import { highlightJsRegisterLanguage } from '../../../../../iqui-ngx-elements/src';

// Import module registration service instance
import { register } from '../register';

// Register highlight.js languages
import { default as javascript } from 'highlight.js/lib/languages/javascript';
highlightJsRegisterLanguage('javascript', javascript);
import { default as xml } from 'highlight.js/lib/languages/xml';
highlightJsRegisterLanguage('xml', xml);
import { default as css } from 'highlight.js/lib/languages/css';
highlightJsRegisterLanguage('css', css);

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

// Register declarations to module
register.registerDeclarationAndExport(HighlightJsShowcaseComponent);
