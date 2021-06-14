// Phrase class
// Used to encapsulate a searchable/filterable string/reg-exp definition
// ----------------------------------------------------------------------------

// Import dependencies
import { EnTT } from '@ofzza/entt';

/**
 * Phrase class
 */
export class Phrase extends EnTT {
  /**
   * Clones a phrase instance
   * @param phrase Phrase instance to clone
   */
  public static clone<TThis, TInto>(instance: TThis, { target = undefined as TInto, validate = true } = {}): unknown extends TInto ? TThis : TInto {
    return (new Phrase(((instance as unknown) as Phrase).value, {
      isCaseSensitive: ((instance as unknown) as Phrase).isCaseSensitive,
      isRegExp: ((instance as unknown) as Phrase).isRegExp,
    }) as unknown) as unknown extends TInto ? TThis : TInto;
  }

  /**
   * Converts a Phrase instance into a string representation
   * @param phrase Phrase instance
   */
  public static stringify(phrase) {
    if (phrase._isRegExp) {
      return `/${phrase.value}/${!phrase.isCaseSensitive ? 'i' : ''}`;
    } else {
      return `"${phrase.value}"${!phrase.isCaseSensitive ? 'i' : ''}`;
    }
  }

  /**
   * Converts a string representation of a Phrase into a Phrase instance
   * @param value Phrase string representation
   */
  public static parse(value) {
    if (value && value.length && value[0] === '/') {
      // Parse regexp
      const parsed = value.split('/'),
        content = parsed.slice(1, -1).join('/'),
        isCaseSensitive = parsed[parsed.length - 1].indexOf('i') === -1;
      return new Phrase(content, { isRegExp: true, isCaseSensitive });
    } else if (value && value.length && value[0] === '"') {
      // Parse string
      const parsed = value.split('"'),
        content = parsed.slice(1, -1).join('"'),
        isCaseSensitive = parsed[parsed.length - 1].indexOf('i') === -1;
      return new Phrase(content, { isRegExp: false, isCaseSensitive });
    } else {
      throw new Error('Value not recognized as a string representation of a Phrase!');
    }
  }

  /**
   * Holds phrase inner value
   */
  public value = undefined as string;
  /**
   * Holds if value is a RegExp string
   */
  public isRegExp = undefined as boolean;
  /**
   * Holds if value is case sensitive
   */
  public isCaseSensitive = undefined as boolean;

  /**
   * Checks if phrase is empty (equal to newly created instance)
   */
  public get isEmpty() {
    return !this.value && !this.isRegExp && !this.isCaseSensitive;
  }

  constructor(value: string = '', { isRegExp = false, isCaseSensitive = false } = {}) {
    super();
    super.entt();

    // Set properties
    this.value = value;
    this.isRegExp = isRegExp;
    this.isCaseSensitive = isCaseSensitive;
  }

  /**
   * Checks if haystack contains phrase
   * @param haystack String to check
   */
  public match(haystack: string) {
    if (!this.isRegExp) {
      // Match as plain string
      if (this.isCaseSensitive) {
        // Maths as case-sensitive
        return haystack.toLowerCase().indexOf(this.value.toLowerCase()) !== -1;
      } else {
        // Maths as not case-sensitive
        return haystack.indexOf(this.value) !== -1;
      }
    } else {
      // Match as regexp
      return !!haystack.match(new RegExp(this.value, this.isCaseSensitive ? '' : 'i'));
    }
  }

  /**
   * Converts a phrase into a string representation
   */
  public toString() {
    return Phrase.stringify(this);
  }
}
