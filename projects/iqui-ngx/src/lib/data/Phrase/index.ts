// Phrase class
// Used to encapsulate a searchable/filterable string/reg-exp definition
// ----------------------------------------------------------------------------

/**
 * Phrase class
 */
export class Phrase {

  /**
   * Clones a phrase instance
   * @param phrase Phrase instance to clone
   */
  public static clone (phrase) {
    return new Phrase(
      phrase.value,
      {
        isCaseSensitive: phrase.isCaseSensitive,
        isRegExp: phrase.isRegExp
      }
    );
  }

  /**
   * Converts a Phrase instance into a string representation
   * @param phrase Phrase instance
   */
  public static stringify (phrase) {
    if (phrase._isRegExp) {
      return `/${phrase._value}/${!phrase._isCaseSensitive ? 'i' : ''}`;
    } else {
      return `"${phrase._value}"${!phrase._isCaseSensitive ? 'i' : ''}`;
    }
  }

  /**
   * Converts a string representation of a Phrase into a Phrase instance
   * @param value Phrase string representation
   */
  public static parse (value) {
    if (value && value.length && value[0] === '/') {
      // Parse regexp
      const parsed          = value.split('/'),
            content         = parsed.slice(1, -1).join('/'),
            isCaseSensitive = (parsed[parsed.length - 1].indexOf('i') === -1);
      return new Phrase(content, { isRegExp: true, isCaseSensitive });
    } else if (value && value.length && value[0] === '"') {
      // Parse string
      const parsed          = value.split('"'),
            content         = parsed.slice(1, -1).join('"'),
            isCaseSensitive = (parsed[parsed.length - 1].indexOf('i') === -1);
      return new Phrase(content, { isRegExp: false, isCaseSensitive });
    } else {
      throw new Error('Value not recognized as a string representation of a Phrase!');
    }
  }

  /**
   * Holds phrase inner value
   */
  protected _value: string;
  /**
   * Gets/Sets phrase inner value
   */
  public get value () { return this._value; }
  public set value (value) { this._value = value; }
  /**
   * Holds if value is a RegExp string
   */
  protected _isRegExp: boolean;
  /**
   * Gets/Sets if value is a RegExp string
   */
  public get isRegExp () { return this._isRegExp; }
  public set isRegExp (value) { this._isRegExp = value; }
  /**
   * Holds if value is case sensitive
   */
  protected _isCaseSensitive: boolean;
  /**
   * Gets/Sets if value is case sensitive
   */
  public get isCaseSensitive () { return this._isCaseSensitive; }
  public set isCaseSensitive (value) { this._isCaseSensitive = value; }

  constructor (value: string = '', { isRegExp = false, isCaseSensitive = false } = {}) {
    // Set properties
    this._value	= value;
    this._isRegExp = isRegExp;
    this._isCaseSensitive = isCaseSensitive;
  }

  /**
   * Converts a phrase into a string representation
   */
  public toString () {
    return Phrase.stringify(this);
  }

}
