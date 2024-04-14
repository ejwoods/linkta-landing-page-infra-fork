import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    supportFile: 'cypress/support/index.ts',
  },
});
