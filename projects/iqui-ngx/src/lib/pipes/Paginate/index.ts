// Paginate pipe
// ----------------------------------------------------------------------------

// Import dependencies
import { Pipe, PipeTransform } from '@angular/core';
import { Pagination} from '../../data';

/**
 * Paginates an array of records
 */
@Pipe({
  name: 'iquiPaginate'
})
export class PaginatePipe implements PipeTransform {
  public transform (items: any[], startIndex: number, pageLength: number, pagination?: Pagination): any[] {
    // Update data being paginated (if pagination provided)
    if (pagination) {
      pagination.items = items;
    }
    // Return current page range of items
    return (items || []).slice(startIndex, startIndex + pageLength);
  }
}
