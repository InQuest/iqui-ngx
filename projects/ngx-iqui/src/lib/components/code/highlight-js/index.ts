// Wrapper around highlight.js (https://highlightjs.org/)
// TODO: Consider pushing highlighting into a web-worker
// ----------------------------------------------------------------------------

// Import dependencies
import { Component,  OnChanges, AfterViewInit, Input, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { default as hljs } from 'highlight.js/lib/highlight';

/**
 * Registers additional highligh.js (https://highlightjs.org/) language syntaxes
 * @param languageName Name by which the language will be referenced
 * @param language Language syntax definition (from "highlight.js/lib/languages/")
 */
export function highlightJsRegisterLanguage (languageName: string, language: any) {
  HighlightJsComponent.registerLanguage(languageName, language);
}

/**
 * Highlight.js (https://highlightjs.org/) wrapper, displays colored syntax
 *
 * Usage:
 *
 *  <iqui-highlightjs\
 *    [syntax]      ="'<div> Hello world! </div>'"\
 *    [languages]   ="['xml', 'css', 'javascript']"\
 *    [filter]      ="..."\
 *    [highlight]   ="true|false"\
 *    [wrap]        ="true|false"\
 *    [trim]        ="true|false"\
 *    [lineNumbers] ="true|false"\
 *  >\
 *  </iqui-highlightjs>
 *
 * ... or with inlined syntax:
 *
 *  <iqui-highlightjs\
 *    [languages]   ="['xml', 'css', 'javascript']"\
 *    [filter]      ="..."\
 *    [highlight]   ="true|false"\
 *    [wrap]        ="true|false"\
 *    [trim]        ="true|false"\
 *    [lineNumbers] ="true|false"\
 *  >\
 *    <textarea>\
 *      <div> Hello {{'world'}}! </div>\
 *    </textarea>\
 *  </iqui-highlightjs>
 *
 * ... or with un-interpolated inlined syntax:
 *
 *  <iqui-highlightjs\
 *    [languages]   ="['xml', 'css', 'javascript']"\
 *    [filter]      ="..."\
 *    [highlight]   ="true|false"\
 *    [wrap]        ="true|false"\
 *    [trim]        ="true|false"\
 *    [lineNumbers] ="true|false"\
 *  >\
 *    <textarea ngNonBindable>\
 *      <div> Hello {{'world'}}! </div>\
 *    </textarea>\
 *  </iqui-highlightjs>
 *
 */
@Component({
  selector:       'iqui-highlightjs',
  templateUrl:    './index.html',
  styleUrls:      [`./style.scss`]
})
export class HighlightJsComponent implements OnChanges, AfterViewInit {

  /**
   * Static method allowing registration of additional language syntaxes
   * @param languageName Name by which the language will be referenced
   * @param language Language syntax definition (from "highlight.js/lib/languages/")
   */
  public static registerLanguage (languageName: string, language: any) {
    hljs.registerLanguage(languageName, language);
  }

  /**
   * If highlighting is disabled. If not, non-highlighted syntax will be shown
   */
  @Input()
  public disabled = false;
  /**
   * [class] binding
   */
  @Input()
  public class: string = null;
  /**
   * [ngClass] binding
   */
  @Input()
  public ngClass: any;
  /**
   * Syntax to highlight and display
   */
  @Input()
  public syntax: string;
  /**
   * Language syntaxes to attempt highlighting with
   */
  @Input()
  public languages: string[];
  /**
   * Row filter (will only show rows matching given string or regexp)
   */
  @Input()
  public filter: RegExp|any;
  /**
   * If rows should wrap
   */
  @Input()
  public wrap = true;
  /**
   * If rows should be left-trimmed by common amount of whitespace
   */
  @Input()
  public trim = true;
  /**
   * If line numbers should be shown left of all rows
   */
  @Input()
  public lineNumbers = true;

  // Reference to passed-through content container element
  @ViewChild('syntax', { read: ElementRef })
  private _syntaxEl: ElementRef;
  // Syntax extracted from the passed-through content container element
  private _syntaxElInnerHTML: string;

  // Rendered, highlighted syntax HTML
  public _highlightedSyntax = '';

  constructor (private _cd: ChangeDetectorRef) {}

  public ngAfterViewInit () {

    // If no syntax attribute set, try extracting value from <textarea /> child
    if (!this.syntax) {

      // Check if single <textarea /> child
      // tslint:disable-next-line: max-line-length
      if ((this._syntaxEl.nativeElement.children.length === 1) && (this._syntaxEl.nativeElement.children[0].tagName.toLowerCase() === 'textarea')) {
        // Use textarea value as syntax
        this._syntaxElInnerHTML = this._syntaxEl.nativeElement.children[0].value;
      } else {
        // Use .innerHTML as syntax (might be pre-parsed by Angular)
        this._syntaxElInnerHTML = this._syntaxEl.nativeElement.innerHTML;
      }

    }

    // Trigger highlighting render
    this._renderHighlightedSyntax();
    this._cd.detectChanges();

  }

  public ngOnChanges () {

    // (Re)Trigger highlighting render
    this._renderHighlightedSyntax();

  }

  /**
   * (Re)Renders given syntax as HTML and displays it
   */
  private _renderHighlightedSyntax () {

    // Set initial syntax from [syntax] attribute
    let syntax = this.syntax || this._syntaxElInnerHTML;

    // Trim lines
    if (syntax && this.trim) {
      // Find shortest available start-trim
      const minStartTrim = syntax.split('\n').reduce((min: number, line: string) => {
        const match = line.match(/\S/),
              trimLength = (match ? match.index : Number.MAX_SAFE_INTEGER);
        return (trimLength < min ? trimLength : min);
      }, Number.MAX_SAFE_INTEGER);
      // Trim lines
      syntax = syntax
        .split('\n')
        .reduce((aggregate: any, line: string, i: number, arr: string[]) => {
          // Use remaining (after empty rows) array as response
          if (line.match(/\S/)) { return arr.splice(i); }
        }, null)
        .reverse()
        .reduce((aggregate: any, line: string, i: number, arr: string[]) => {
          // Use remaining (after empty rows) array as response
          if (line.match(/\S/)) { return arr.splice(i); }
        }, null)
        .reverse()
        .reduce((lines: string[], line: string) => {
          lines.push(line.substr(minStartTrim));
          return lines;
        }, [])
        .join('\n');
    }

    // HighlightSyntax
    try {
      syntax = (!this.disabled ? hljs.highlightAuto(syntax, this.languages).value : syntax);
    } catch (err) {
      // tslint:disable-next-line: no-unused-expression
      err; return;
    }

    // Add line numbers
    const rawSyntaxLines = syntax.split('\n'),
          highlightedSyntaxLines = syntax.split('\n');
    let numberedSyntax = '';

    // Filter lines
    if (this.filter && ((this.filter instanceof RegExp) || (this.filter && this.filter.toString().trim()))) {
      // Filter rows
      highlightedSyntaxLines.forEach((line, i) => {
        // Check if filter is regexp or treat as string
        if (this.filter instanceof RegExp) {
          if (rawSyntaxLines[i].match(this.filter)) {
            // tslint:disable-next-line: max-line-length
            numberedSyntax += this._renderLine(line, (this.lineNumbers ? i + 1 : null));
          }
        } else if (this.filter && this.filter.toString().trim()) {
          if (rawSyntaxLines[i].indexOf(this.filter.toString().trim()) !== -1) {
            // tslint:disable-next-line: max-line-length
            numberedSyntax += this._renderLine(line, (this.lineNumbers ? i + 1 : null));
          }
        }
      });
    } else {
      // Allow all rows
      numberedSyntax = highlightedSyntaxLines.map((line, i) => {
        return this._renderLine(line, (this.lineNumbers ? i + 1 : null));
      }).join('');
    }

    // Set syntax with added line numbers
    const orderOfMagnitude = Math.ceil(Math.log10(highlightedSyntaxLines.length));
    this._highlightedSyntax = `<ul class="${ this.lineNumbers ? `hljs-count-log-${orderOfMagnitude}` : '' }">${numberedSyntax}</ul>`;

  }

  /**
   * (Re)Renders a line of already highlighted syntax as HTML with or without a line number
   * @param line A line of already highlighted syntax
   * @param lineNumber (Optional) Line number to render left of thr syntax line
   */
  private _renderLine (line, lineNumber = null) {
    // tslint:disable-next-line: max-line-length
    return (lineNumber !== null ? `<li><span class="hljs-line-num">${lineNumber}</span>${line || '&nbsp;'}</li>` : `<li>${line || '&nbsp;'}</li>`);
  }

  /**
   * Composes class value based on property values
   */
  public get _composedClassValue () {
    return [
      // Mark as disabled, if disabled (.disabled)
      (this.disabled ? 'disabled' : null),
      // Pass-through host class
      (this.class || null)
    ].join(' ');
  }


}
