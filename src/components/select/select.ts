// beta-select — Pass-through registration (forge-select → beta-select)
import '@adesso-forge/core-ds';
import { registerPassThrough } from '@adesso-forge/ds-shared/components/register';

registerPassThrough('forge-select', 'beta-select');
