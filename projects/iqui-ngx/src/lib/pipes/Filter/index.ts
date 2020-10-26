// Phrase filtering pipe
// ----------------------------------------------------------------------------

// Import dependencies
import { Pipe, PipeTransform } from '@angular/core';
import { Phrase } from '../../data';

/**
 * Filters items based on provided filtering argument
 */
@Pipe({
  name: 'iquiFilter',
})
export class FilterPipe implements PipeTransform {
  public transform(
    items: string | any[],
    match: boolean | number | string | RegExp | Phrase,
    path: null | string | ((a: any) => boolean | number | string) | ((a: any) => (b: any) => boolean | number | string),
    pathFactoryArguments = null as any,
  ): any[] {
    const target = items instanceof Array ? items : items.split('\n');
    return (target || []).filter(item => {
      // Check filter type
      const hasBooleanFilter = typeof match === 'boolean',
        hasNumberFilter = typeof match === 'number',
        hasStringFilter = typeof match === 'string' && match.trim(),
        hasRegExpFilter = match instanceof RegExp,
        hasPhraseFilter = match instanceof Phrase && match.value.trim();
      // Check if filter is regexp or treat as string
      if (hasBooleanFilter || hasNumberFilter || hasStringFilter || hasRegExpFilter || hasPhraseFilter) {
        if (hasBooleanFilter || hasNumberFilter) {
          // Filter as exact value
          return extractValueFromItem(item, path, pathFactoryArguments) === match;
        } else if (hasStringFilter || (hasPhraseFilter && !(match as Phrase).isRegExp)) {
          // Filter as string
          try {
            const filterValue = hasStringFilter ? (match as string) : (match as Phrase).value,
              filterCaseSensitive = hasStringFilter ? true : (match as Phrase).isCaseSensitive,
              value = extractValueFromItem(item, path, pathFactoryArguments),
              haystack = filterCaseSensitive ? value : value.toLowerCase(),
              needle = filterCaseSensitive ? filterValue.trim() : filterValue.trim().toLowerCase();
            return haystack.indexOf(needle) !== -1;
          } catch (err) {
            return false;
          }
        } else if (hasRegExpFilter || (hasPhraseFilter && (match as Phrase).isRegExp)) {
          // Filter as regexp
          try {
            const value = extractValueFromItem(item, path, pathFactoryArguments),
              // tslint:disable-next-line: max-line-length
              filterValue = hasRegExpFilter ? (match as RegExp) : new RegExp((match as Phrase).value, (match as Phrase).isCaseSensitive ? '' : 'i');
            return !!value.match(filterValue);
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
function extractValueFromItem(
  item,
  path: string | ((a: any) => boolean | number | string) | ((a: any) => (b: any) => boolean | number | string),
  pathFactoryArguments: any,
) {
  if (path instanceof Function) {
    if (!pathFactoryArguments) {
      // Extract using provided function
      return (path as (a: any) => boolean | number | string)(item);
    } else {
      // Extract using provided function factory
      return (path as (a: any) => (a: any) => boolean | number | string)(pathFactoryArguments)(item);
    }
  } else if (path) {
    // Extract value directly
    return item[path];
  } else {
    // Return item as already extracted
    return item;
  }
}
