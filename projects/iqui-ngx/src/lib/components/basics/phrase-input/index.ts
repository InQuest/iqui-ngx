// Phrase input component
// ----------------------------------------------------------------------------

// Import dependencies
import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

// Import data
import { Phrase } from '../../../data';

/**
 * Phrase input component
 *
 * Usage:
 *
 *  <iqui-phrase-input
 *    [presets]="['search', /my.*+search/]"
 *    (updated)="onUpdated($event)"
 *  >
 *  </iqui-phrase-input>
 *
 */
@Component({
  selector:     'iqui-phrase-input',
  templateUrl:  `./index.html`,
  styleUrls:    [`./style.scss`]
})
export class PhraseInputComponent implements OnChanges {

  /**
   * Two-way bound phrase being edited
   */
  @Input()
  public phrase: string|Phrase = new Phrase();
  @Output()
  public phraseChange = new EventEmitter<string|Phrase>();

  /**
   * Input component input
   */
  @Input()
  public placeholder: string;

  /**
   * Array of pre-composed presets on offer
   */
  @Input()
  public presets: string[]|Phrase[];

  /**
   * Internal phrase being edited
   */
  public _phrase = new Phrase();

  public ngOnChanges () {
    // Ingest set phrase
    if (this.phrase && this.phrase instanceof Phrase) {
      this._phrase = Phrase.clone(this.phrase);
    } else if (this.phrase && typeof this.phrase === 'string') {
      this._phrase = Phrase.parse(this.phrase);
    }
  }


  /**
   * Updates a phrase after being edited
   * @param value Edited value
   */
  public _valueChanged (value) {
    // Update value if value provided
    if (value !== undefined) {
      this._phrase.value = value;
    }
    // Trigger update
    this._triggerUpdate();
  }
  /**
   * Clears editing phrase
   */
  public _clearPhrase () {
    // Clear phrase
    this._phrase.value = '';
    // Trigger update
    this._triggerUpdate();
  }
  /**
   * Toggles phrase's case sensitivity
   */
  public _togglePhraseCaseSensitivity () {
    // Toggle case sensitivity
    this._phrase.isCaseSensitive = !this._phrase.isCaseSensitive;
    // Trigger update
    this._triggerUpdate();
  }
  /**
   * Toggles ig phrase is a reg-exp
   */
  public _togglePhraseRegExp () {
    // Toggle reg-exp
    this._phrase.isRegExp = !this._phrase.isRegExp;
    // Trigger update
    this._triggerUpdate();
  }

  /**
   * Triggers phrase update event
   */
  public _triggerUpdate () {
    // Trigger update event
    if (this.phrase && this.phrase instanceof Phrase) {
      this.phraseChange.emit(Phrase.clone(this._phrase))
    } else if (this.phrase && typeof this.phrase === 'string') {
      this.phraseChange.emit(Phrase.stringify(this._phrase));
    }
  }

}
