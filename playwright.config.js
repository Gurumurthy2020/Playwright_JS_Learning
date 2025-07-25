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
    headless: false,
    screenshot:'on',
     trace: 'retain-on-failure'
  
  },
};
module.exports=config;

