// beta-format-date — Pass-through registration (forge-format-date → beta-format-date)
import '@adesso-forge/core-ds';
import { registerPassThrough } from '@adesso-forge/ds-shared/components/register';

registerPassThrough('forge-format-date', 'beta-format-date');
