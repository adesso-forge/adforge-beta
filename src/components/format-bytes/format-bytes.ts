// beta-format-bytes — Pass-through registration (forge-format-bytes → beta-format-bytes)
import '@adesso-forge/core-ds';
import { registerPassThrough } from '@adesso-forge/ds-shared/components/register';

registerPassThrough('forge-format-bytes', 'beta-format-bytes');
