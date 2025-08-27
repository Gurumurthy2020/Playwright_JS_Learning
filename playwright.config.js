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
  reporter:[['html'],['allure-playwright']],
  //retries:2,

  use: {
    
    browserName:'chromium',
    viewport:{width:1536,height:960},
    headless: false,
    screenshot:'on',
    trace: 'off',
    video:'off'
  
  },
};
module.exports=config;

