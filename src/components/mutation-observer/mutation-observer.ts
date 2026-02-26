// beta-mutation-observer — Pass-through registration (forge-mutation-observer → beta-mutation-observer)
import '@adesso-forge/core-ds';
import { registerPassThrough } from '@adesso-forge/ds-shared/components/register';

registerPassThrough('forge-mutation-observer', 'beta-mutation-observer');
