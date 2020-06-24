// Slicing pipe
// ----------------------------------------------------------------------------

// Import dependencies
import { Pipe, PipeTransform } from '@angular/core';

/**
 * Slices array
 */
@Pipe({
  name: 'iquiSlice'
})
export class SlicePipe implements PipeTransform {
  public transform (items: any[], start?: number, length?: number): any[] {
    return (items || []).slice(start, length);
  }
}
