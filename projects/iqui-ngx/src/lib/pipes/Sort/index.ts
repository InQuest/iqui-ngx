// Sorting pipe
// ----------------------------------------------------------------------------

// Import dependencies
import { Pipe, PipeTransform } from '@angular/core';

/**
 * Sorts array of items based on given property key or mapping function
 */
@Pipe({
  name: 'iquiSort'
})
export class SortPipe implements PipeTransform {
  public transform (items: any[], filter: string|((item: any) => any|any[]), asc = true): any {
    if (!items || !(items instanceof Array)) { return items; }
    return [...(items || [])].sort((a: any, b: any) => {
      const aValue = extractValueFromItem(a, filter),
            bValue = extractValueFromItem(b, filter);
      // Check if comparing by single value or array
      if (aValue instanceof Array) {
        // Compare by array of values
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < aValue.length; i++) {
          // Compare by single values
          if (aValue[i] < bValue[i]) {
            return (asc ? -1 : +1);
          } else if (aValue[i] > bValue[i]) {
            return (asc ? +1 : -1);
          }
        }
        return 0;
      } else {
        // Compare by single values
        if (aValue === bValue) {
          return 0;
        } else if (aValue < bValue) {
          return (asc ? -1 : +1);
        } else if (aValue > bValue) {
          return (asc ? +1 : -1);
      }
      }
    });
  }
}

/**
 * Extracts value at a given path from item
 * @param item Item to extract value from
 * @param path Path string or extracting function
 */
function extractValueFromItem (item, path: string|((item: any) => any)) {
  if (path instanceof Function) {
    return path(item);
  } else {
    return item[path];
  }
}
