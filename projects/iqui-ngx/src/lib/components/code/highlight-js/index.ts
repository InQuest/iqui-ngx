// Wrapper around highlight.js (https://highlightjs.org/)
// TODO: Consider pushing highlighting into a web-worker
// ----------------------------------------------------------------------------

// Import dependencies
import {
  Directive, Component, OnChanges, AfterContentInit,
  Input, ElementRef, ContentChild, ContentChildren, QueryList, TemplateRef, ChangeDetectorRef
} from '@angular/core';
import { default as hljs } from 'highlight.js/lib/highlight';

// Import data
import { Phrase } from '../../../data';

/**
 * Registers additional highligh.js (https://highlightjs.org/) language syntaxes
 * @param languageName Name by which the language will be referenced
 * @param language Language syntax definition (from "highlight.js/lib/languages/")
 */
export function highlightJsRegisterLanguage (languageName: string, language: any) {
  HighlightJsComponent.registerLanguage(languageName, language);
}

/**
 * Used to include syntax using a textarea child element
 *
 * Usage:
 *
 * <iqui-highlightjs>
 *   <textarea>
 *     <div> Code example ... </div>
 *   </textarea>
 * </iqui-highlightjs>
 */
@Directive({
  selector: 'textarea'
})
export class HighlightJsTextareaDirective {}

/**
 * Used to include a filter component into a <iqui-highlightjs /> component
 *
 * Usage:
 *
 * <iqui-highlightjs>
 *   <ng-container *iquiHighlightJsInjectedTop="let filter = filter;">
 *     Some header content ...
 *   </ng-container>
 *   <textarea ngNonBindable>
 *     <div> Code example ... </div>
 *   </textarea>
 * </iqui-highlightjs>
 */
@Directive({
  selector: '[iquiHighlightJsInjectedTop]'
})
export class HighlightJsInjectTopDirective {}

/**
 * Used to include a filter component into a <iqui-highlightjs /> component
 *
 * Usage:
 *
 * <iqui-highlightjs>
 *   <ng-container *iquiHighlightJsInjectedBottom="let filter = filter;">
 *     Some footer content ...
 *   </ng-container>
 *   <textarea ngNonBindable>
 *     <div> Code example ... </div>
 *   </textarea>
 * </iqui-highlightjs>
 */
@Directive({
  selector: '[iquiHighlightJsInjectedBottom]'
})
export class HighlightJsInjectBottomDirective {}

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
export class HighlightJsComponent implements OnChanges, AfterContentInit {

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
   * Row filter (will only show rows matching given string or regexp or Phrase instance)
   */
  @Input()
  public filter: string|RegExp|Phrase = new Phrase();
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
  @ContentChild(HighlightJsTextareaDirective, { read: ElementRef })
  private _syntaxEl: ElementRef;
  // Syntax extracted from the passed-through content container element
  private _syntaxElInnerHTML: string;

  // Finds all content elements injected to the top
  @ContentChildren(HighlightJsInjectTopDirective, { read: TemplateRef })
  public _injectedTop: QueryList<TemplateRef<any>>;
  // Finds all content elements injected to the bottom
  @ContentChildren(HighlightJsInjectBottomDirective, { read: TemplateRef })
  public _injectedBottom: QueryList<TemplateRef<any>>;

  // Rendered, highlighted syntax HTML
  public _highlightedSyntax = '';

  constructor (private _cd: ChangeDetectorRef) {}

  public ngAfterContentInit () {

    // If no syntax attribute set, try extracting value from <textarea /> child
    if (!this.syntax) {
      this._ingestTextareaSyntax();
    }

    // Trigger highlighting render
    this._renderHighlightedSyntax();
    this._cd.detectChanges();

  }

  public ngOnChanges () {
    // Trigger highlighting render
    this._renderHighlightedSyntax();
  }

  /**
   * Forces a refresh of the component and it's syntax
   */
  public refresh () {
    // (Re)Ingest textarea syntax
    if (!this.syntax) {
      this._ingestTextareaSyntax();
    }
    // (Re)Trigger highlighting render
    this._renderHighlightedSyntax();
  }

  /**
   * Ingest syntax from textarea, if one is used
   */
  private _ingestTextareaSyntax () {
    // Check if single <textarea /> child
    if (this._syntaxEl) {
      // Use textarea value as syntax
      this._syntaxElInnerHTML = this._syntaxEl.nativeElement.value;
    }
  }

  /**
   * (Re)Renders given syntax as HTML and displays it
   */
  private _renderHighlightedSyntax () {

    // Set initial syntax from [syntax] attribute
    let syntax = this.syntax || this._syntaxElInnerHTML;
    if (!syntax) { return; }

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
    const hasStringFilter = (typeof this.filter === 'string' && this.filter.trim()),
          hasRegExpFilter = (this.filter instanceof RegExp),
          hasPhraseFilter = (this.filter instanceof Phrase && this.filter.value.trim());
    if (hasStringFilter || hasRegExpFilter || hasPhraseFilter) {
      // Filter rows
      highlightedSyntaxLines.forEach((line, i) => {
        // Check if filter is regexp or treat as string
        if (hasStringFilter || (hasPhraseFilter && !(this.filter as Phrase).isRegExp)) {
          try {
            const filterValue         = (hasStringFilter ? (this.filter as string) : (this.filter as Phrase).value),
                  filterCaseSensitive = (hasStringFilter ? true : (this.filter as Phrase).isCaseSensitive),
                  haystack            = (filterCaseSensitive ? rawSyntaxLines[i] : rawSyntaxLines[i].toLowerCase()),
                  needle              = (filterCaseSensitive ? filterValue.trim() : filterValue.trim().toLowerCase());
            if (haystack.indexOf(needle) !== -1) {
              numberedSyntax += this._renderLine(line, (this.lineNumbers ? i + 1 : null));
            }
          } catch (err) {}
        } else if (hasPhraseFilter || (hasPhraseFilter && (this.filter as Phrase).isRegExp)) {
          try {
            // tslint:disable-next-line: max-line-length
            const filterValue = (hasRegExpFilter ? (this.filter as RegExp) : new RegExp((this.filter as Phrase).value, ((this.filter as Phrase).isCaseSensitive ? '' : 'i')));
            if (rawSyntaxLines[i].match(filterValue)) {
              numberedSyntax += this._renderLine(line, (this.lineNumbers ? i + 1 : null));
            }
          } catch (err) {}
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
