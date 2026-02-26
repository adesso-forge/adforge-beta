// beta-avatar — Pass-through registration (forge-avatar → beta-avatar)
import '@adesso-forge/core-ds';
import { registerPassThrough } from '@adesso-forge/ds-shared/components/register';

registerPassThrough('forge-avatar', 'beta-avatar');
