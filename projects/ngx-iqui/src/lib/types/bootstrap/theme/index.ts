// Bootstrap theme ENUMs and Types
// Enumerates commonly used bootstrap theme-ing values as types to be used to statically type properties and such.
// ----------------------------------------------------------------------------

/*
 * Bootstrap theme colors enum
 */
// tslint:disable-next-line: variable-name
export const BootstrapTheme: Record<string, TBootstrapTheme> = {
  PRIMARY:    'primary',
  SECONDARY:  'secondary',
  SUCCESS:    'success',
  WARNING:    'warning',
  DANGER:     'danger',
  INFO:       'info',
  LIGHT:      'light',
  DARK:       'dark'
};
/*
 * Bootstrap theme colors type
 */
export type TBootstrapTheme = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark';

/*
 * Bootstrap theme sizes enum
 */
// tslint:disable-next-line: variable-name
export const BootstrapSize: Record<string, TBootstrapSize> = {
  LARGE: 'lg',
  SMALL: 'sm'
};
/*
 * Bootstrap theme sizes type
 */
export type TBootstrapSize = 'lg' | 'sm';
