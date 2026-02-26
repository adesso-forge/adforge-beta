// beta-input — Pass-through registration (forge-input → beta-input)
import '@adesso-forge/core-ds';
import { registerPassThrough } from '@adesso-forge/ds-shared/components/register';

registerPassThrough('forge-input', 'beta-input');
