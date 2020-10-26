// HTML ENUMs and Types
// Enumerates commonly used HTML values as types to be used to statically type properties and such.
// ----------------------------------------------------------------------------

// input[type] values enum
// tslint:disable-next-line: variable-name
export const HtmlInputType: Record<string, THtmlInputType> = {
  TEXT: 'text',
  NUMBER: 'number',
  SEARCH: 'search',
  URL: 'url',
  EMAIL: 'email',
  TEL: 'tel',
  PASSWORD: 'password',
  DATE: 'date',
  TIME: 'time',
  DATETIMELOCAL: 'datetime-local',
  WEEK: 'week',
  MONTH: 'month',
  COLOR: 'color',
  FILE: 'file',
};

// input[type] values type
// tslint:disable-next-line: max-line-length
export type THtmlInputType =
  | 'text'
  | 'number'
  | 'search'
  | 'url'
  | 'email'
  | 'tel'
  | 'password'
  | 'date'
  | 'time'
  | 'datetime-local'
  | 'week'
  | 'month'
  | 'color'
  | 'file';
