// Phrase filtering pipe
// ----------------------------------------------------------------------------

// Import dependencies
import { Pipe, PipeTransform } from '@angular/core';
import { Phrase} from '../../data';

/**
 * Filters items based on provided filtering argument
 */
@Pipe({
  name: 'iquiFilter'
})
export class FilterPipe implements PipeTransform {
  public transform (
    items: any[],
    filter: boolean|number|string|RegExp|Phrase,
    path: string|((a: any) => boolean|number|string)
  ): any[] {
    return (items || []).filter(item => {
      // Check filter type
      const hasBooleanFilter = (typeof filter === 'boolean'),
            hasNumberFilter  = (typeof filter === 'number'),
            hasStringFilter  = (typeof filter === 'string' && filter.trim()),
            hasRegExpFilter  = (filter instanceof RegExp),
            hasPhraseFilter  = (filter instanceof Phrase && filter.value.trim());
      // Check if filter is regexp or treat as string
      if (hasBooleanFilter || hasNumberFilter || hasStringFilter || hasRegExpFilter || hasPhraseFilter) {
        if (hasBooleanFilter || hasNumberFilter) {

          // Filter as exact value
          return (extractValueFromItem(item, path) === filter);

        } else if (hasStringFilter || (hasPhraseFilter && !(filter as Phrase).isRegExp)) {

          // Filter as string
          try {
            const filterValue         = (hasStringFilter ? (filter as string) : (filter as Phrase).value),
                  filterCaseSensitive = (hasStringFilter ? true : (filter as Phrase).isCaseSensitive),
                  value               = extractValueFromItem(item, path),
                  haystack            = (filterCaseSensitive ? value : value.toLowerCase()),
                  needle              = (filterCaseSensitive ? filterValue.trim() : filterValue.trim().toLowerCase());
            return (haystack.indexOf(needle) !== -1);
          } catch (err) {
            return false;
          }

        } else if (hasRegExpFilter || (hasPhraseFilter && (filter as Phrase).isRegExp)) {

          // Filter as regexp
          try {
            const value       = extractValueFromItem(item, path),
                  // tslint:disable-next-line: max-line-length
                  filterValue = (hasRegExpFilter ? (filter as RegExp) : new RegExp((filter as Phrase).value, ((filter as Phrase).isCaseSensitive ? '' : 'i')));
            return !!(value.match(filterValue));
          } catch (err) {
            return false;
          }

        } else {
          // Return unfiltered
          return true;
        }
      } else {
          // Return unfiltered
          return true;
      }
    });
  }
}

/**
 * Extracts value at a given path from item
 * @param item Item to extract value from
 * @param path Path string or extracting function
 */
function extractValueFromItem (item, path: string|((a: any) => boolean|number|string)) {
  if (path instanceof Function) {
    return path(item);
  } else {
    return item[path];
  }
}
