// Copy-2-Clipboard service
// ----------------------------------------------------------------------------

// Import dependencies
import { Injectable, EventEmitter } from '@angular/core';

/**
 * Provides clipboard functionality
 */
@Injectable()
export class ClipboardService {
  /**
   * Fires when a value is copied onto the clipboard
   */
  public static onCopy = new EventEmitter<string>();

  /**
   * Copies content to clipboard
   * @param content Content to copy
   */
  public copy2Clipboard(content: string | HTMLElement) {
    // Remember focused element
    const focused = document.activeElement;
    if (typeof content === 'string') {
      // Copy text to clipboard
      const textarea = document.createElement('textarea');
      textarea.value = content;
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);

      // Fire event
      ClipboardService.onCopy.emit(content);
    } else {
      // Copy from element to clipboard
      const selection = window.getSelection(),
        range = document.createRange();
      range.selectNodeContents(content);
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand('copy');
      selection.removeAllRanges();

      // Fire event
      ClipboardService.onCopy.emit(selection.toString());
    }
    // Refocus previous element
    if (focused) {
      (focused as any).focus();
    }
  }
}
