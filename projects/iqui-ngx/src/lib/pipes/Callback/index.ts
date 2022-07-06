// Callback pipe
// ----------------------------------------------------------------------------

// Import dependencies
import { Pipe, PipeTransform } from '@angular/core';
import { Pagination } from '../../data';

/**
 * Passes its input data to the function passed as its only argument when ever the input data changes
 */
@Pipe({
  name: 'iquiCallback',
})
export class CallbackPipe implements PipeTransform {
  public transform(items: any[], callbackFn: (input: any[]) => any[]): any[] {
    return callbackFn(items);
  }
}
