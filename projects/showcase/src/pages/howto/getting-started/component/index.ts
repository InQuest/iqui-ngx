// Getting started page
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';
import { highlightJsRegisterLanguage } from '../../../../../../iqui-ngx-elements/src';

// Import module registration service instance
import { register } from '../register';

// Register highlight.js languages
import { default as scss } from 'highlight.js/lib/languages/scss';
highlightJsRegisterLanguage('scss', scss);
import { default as javascript } from 'highlight.js/lib/languages/javascript';
highlightJsRegisterLanguage('javascript', javascript);

// Showcase component
@Component({
  selector:     'iqui-getting-started-page',
  templateUrl:  `./index.html`,
  styleUrls:    [`./style.scss`]
})
export class GettingStartedPageComponent {}

// Register declarations to module
register.registerDeclarationAndExport(GettingStartedPageComponent);
