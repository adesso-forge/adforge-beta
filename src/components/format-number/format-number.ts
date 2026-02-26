// beta-format-number — Pass-through registration (forge-format-number → beta-format-number)
import '@adesso-forge/core-ds';
import { registerPassThrough } from '@adesso-forge/ds-shared/components/register';

registerPassThrough('forge-format-number', 'beta-format-number');
