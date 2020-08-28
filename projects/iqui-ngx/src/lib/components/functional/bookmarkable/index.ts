// Bookmark-able directive
// ----------------------------------------------------------------------------

// Import dependencies
import { interval } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { Injectable, Directive, OnInit, AfterViewInit, OnChanges, SimpleChanges, OnDestroy, NgZone, Input, ElementRef } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { ClipboardService } from '../../../services';

/**
 * Bookmarkable directive, makes any HTML element's bookmark-able through a URL fragment
 *
 * Usage:
 *
 * <a iquiBookmarkable="uniqueId" [link]="true" [copy]="true">
 *   Share
 * </a>
 *
 */
@Directive({
  selector: '[iquiBookmarkable]',
})
export class BookmarkableDirective implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  /**
   * Holds unique fragment name to be used in the URL
   */
  // tslint:disable-next-line: no-input-rename
  @Input('iquiBookmarkable')
  public value = undefined as string;

  /**
   * If applied to an anchor element, should it be made to link to the fragment
   */
  @Input()
  public link = true;

  /**
   * If on click, the component should copy the bookmark-able url to clipboard
   */
  @Input()
  public copy = true;

  /**
   * Holds detected URL
   */
  private _url: UrlSegment[];
  /**
   * Holds detected URL fragment
   */
  private _fragment: string;

  constructor (
    private _service: BookmarkableService,
    private _route: ActivatedRoute,
    private _el: ElementRef,
    private _zone: NgZone,
    private _clipboard: ClipboardService
  ) {
    // Subscribe to url changes
    this._route.url.subscribe((url: UrlSegment[]) => {
      // Set url
      this._url = url;
    });
    // Subscribe to fragment changes
    this._route.fragment.subscribe((fragment) => {
      // Set fragment
      this._fragment = fragment;
      // Check fragment and scroll into view
      if (this.checkReferencedByUrlFragment()) {
        this._scrollIntoViewOnceStable();
      }
    });
  }

  public ngOnInit () {
    // Register with central service
    this._service.register(this.value, this);
    // Set class
    this._el.nativeElement.classList.add('iquiBookmarkable');
    // Set HREF attribute value
    this._updateHrefAttribute();
    // Handle click
    if (this.copy) {
      this._el.nativeElement.addEventListener('click', () => {
        // Copy full URL to clipboard
        this._clipboard.copy2Clipboard(this._composeUrl());
      });
    }
  }

  public ngAfterViewInit () {
    // Check fragment and scroll into view
    if (this.checkReferencedByUrlFragment()) {
      this._scrollIntoViewOnceStable();
    }
  }

  public ngOnChanges (changes: SimpleChanges) {
    // Re-register with central service
    this._service.unregister(this.value);
    this._service.register(changes.value, this);
    // Set HREF attribute value
    this._updateHrefAttribute();
  }

  public ngOnDestroy () {
    // Un-register from central service
    this._service.unregister(this.value);
  }

  /**
   * Updates HREF attribute value
   */
  private _updateHrefAttribute () {
    // Set anchor [href] value
    if (this.link && (this._el.nativeElement.tagName.toLowerCase() === 'a')) {
      this._el.nativeElement.href = this._composeUrl();
    }
  }

  /**
   * Composes a full URL to the bookmark-able element
   */
  private _composeUrl () {
    const path = this._url.map(seg => seg.toString()).join('/'),
          postFragment = (this._fragment?.split('#').length > 1 ? `#${ this._fragment.split('#')[1] }` : '');
    return `${window.location.protocol}//${window.location.host}/${path}#${ this.value }${ postFragment }`;
  }

  /**
   * Scrolls into view once page is stable
   */
  private _scrollIntoViewOnceStable () {
    // Wait until stable
    const observable = this._zone.onStable
      .pipe(debounce(() => interval(200)))
      .subscribe(() => {
        // Unsubscribe
        observable.unsubscribe();
        // Scroll into view
        this._zone.runTask(() => {
          this.scrollIntoView();
        });
      });
  }

  /**
   * Checks if this instance is being referenced by the URL fragment
   */
  public checkReferencedByUrlFragment () {
    return this.value && (this._fragment?.split('#')[0] === this.value);
  }

  /**
   * Scrolls host element into view
   */
  public scrollIntoView () {
    // Scroll into view
    setTimeout(() => {
      this._el.nativeElement.classList.add('scrolling');
      this._el.nativeElement.scrollIntoView({
        block:    'start',
        inline:   'nearest',
        behavior: 'smooth'
      });
      this._el.nativeElement.classList.remove('scrolling');
    });
  }

}

/**
 * Central service providing manipulation of BookmarkableDirective instances
 */
@Injectable()
export class BookmarkableService {

  /**
   * Holds references to all BookmarkableDirective instances by their set value
   */
  private static bookmarkables: { [key: string]: BookmarkableDirective } = {};

  /**
   * Registers a BookmarkableDirective instance
   * @param value Currently set value of the BookmarkableDirective instance
   * @param instance BookmarkableDirective instance to register
   */
  public register (value, instance: BookmarkableDirective) {
    BookmarkableService.bookmarkables[value] = instance;
  }
  /**
   * Un-registers a BookmarkableDirective instance
   * @param value Value the BookmarkableDirective instance is registered under
   */
  public unregister (value) {
    delete BookmarkableService.bookmarkables[value];
  }

  /**
   * Scrolls to BookmarkableDirective instance referenced by the URL fragment
   * @param value Value the BookmarkableDirective instance is registered under
   */
  public scrollToValue (value: string) {
    if (BookmarkableService.bookmarkables[value]) {
      BookmarkableService.bookmarkables[value].scrollIntoView();
    }
  }

  /**
   * Scrolls to BookmarkableDirective instance referenced by the URL fragment
   */
  public scrollToFragment () {
    for (const instance of Object.values(BookmarkableService.bookmarkables)) {
      if (instance.checkReferencedByUrlFragment()) {
        instance.scrollIntoView();
      }
    }
  }

}
