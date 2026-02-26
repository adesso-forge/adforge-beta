import { basePreview } from '@adesso-forge/ds-shared/storybook/preview';

// Load Web Awesome base styles
import '@awesome.me/webawesome/dist/styles/webawesome.css';

// Load Beta DS theme overrides
import '../src/themes/shared.css';
import '../src/themes/light.css';

export default {
  ...basePreview,
};
