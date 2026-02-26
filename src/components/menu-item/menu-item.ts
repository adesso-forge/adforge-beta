// beta-menu-item — Pass-through registration (forge-menu-item → beta-menu-item)
import '@adesso-forge/core-ds';
import { registerPassThrough } from '@adesso-forge/ds-shared/components/register';

registerPassThrough('forge-menu-item', 'beta-menu-item');
