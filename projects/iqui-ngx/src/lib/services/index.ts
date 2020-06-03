// Services
// ----------------------------------------------------------------------------

// Export routing services
export * from './routing';
export * from './functional';
import { providers as functionalProviders } from './functional';

// Export providers
export const providers = [
  ...functionalProviders
];
