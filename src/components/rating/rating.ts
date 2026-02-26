// beta-rating — Pass-through registration (forge-rating → beta-rating)
import '@adesso-forge/core-ds';
import { registerPassThrough } from '@adesso-forge/ds-shared/components/register';

registerPassThrough('forge-rating', 'beta-rating');
