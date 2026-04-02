// @ts-check
import { defineConfig, devices  } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Disable full parallel mode
  fullyParallel: false,

  // Always run with only ONE worker
  workers: 1,
  // retries:1, //this helps us to retry failed testcase

  // HTML report
  reporter: 'html',

  use: {
    // Show browser UI
    headless: false,

    // screenshot:`off`,
    // video:'on',

    //enable fo rscreenshots and record to work
    // trace: 'on',

  },


projects: [
    // ✅ CHROME DESKTOP (MAXIMIZED)
    {
      name: 'Chrome Desktop',
      use: {
        browserName: 'chromium',
        viewport: null,
        launchOptions: {
          args: ['--start-maximized']
        }
      }
    },

    // ✅ CHROME MOBILE VIEW
  //   {
  //     name: 'Chrome Mobile',
  //     use: {
  //       browserName: 'chromium',
  //       ...devices['Pixel 5']
  //     }
  //   },

  //   // ✅ EDGE DESKTOP
  //   {
  //     name: 'Edge Desktop',
  //     use: {
  //       browserName: 'chromium',
  //       channel: 'msedge',
  //       viewport: null,
  //       launchOptions: {
  //         args: ['--start-maximized']
  //       }
  //     }
  //   },
    
  // //   {
  // //     name: 'firefox',
  // //     use: { ...devices['Desktop Firefox'] },
  // //   },

  // //   {
  // //     name: 'webkit',
  // //     use: { ...devices['Desktop Safari'] },
  // //   },


  //   // ✅ EDGE MOBILE VIEW
  //   {
  //     name: 'Edge Mobile',
  //     use: {
  //       browserName: 'chromium',
  //       channel: 'msedge',
  //       ...devices['Pixel 5']
  //     }
  //   }
  ]
});
