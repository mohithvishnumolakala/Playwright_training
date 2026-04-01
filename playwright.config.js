// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Disable full parallel mode
  fullyParallel: false,

  // Always run with only ONE worker
  workers: 1,

  // HTML report
  reporter: 'html',

  use: {
    // Show browser UI
    headless: false,

    // screenshot:`off`,

    // Collect trace only on first retry
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});