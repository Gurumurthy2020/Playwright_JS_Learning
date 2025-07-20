// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { report } from 'process';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config={
  testDir: './tests',
  outputDir: './test-results/playwright-report',
  timeout : 40 * 1000,

  expect:{
  timeout : 5000,
  },
  reporter:'html',

  use: {

    browserName:'chromium',
<<<<<<< HEAD
    headless: false,
    screenshot:'on',
     trace: 'retain-on-failure'
=======
    headless:false,
 
    trace: 'on-first-retry',
>>>>>>> 1cd10d71a3734644a3c25f72799b8c48f16b1286
  },
};
module.exports=config;

