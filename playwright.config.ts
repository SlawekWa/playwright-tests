import { defineConfig } from '@playwright/test';
import { AppetizeTestOptions } from '@appetize/playwright';
/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig<AppetizeTestOptions>({
    testDir: './tests',
    outputDir: 'test-results/',
    timeout: 120 * 1000,
    expect: {
        // recommended ratio for screenshot testing
        toMatchSnapshot: {
            maxDiffPixelRatio: 0.05,
        },
    },
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 3 : 0,
    reporter: 'line',

    // correlates to number of concurrent Appetize sessions at a time
    workers: 1,
    fullyParallel: false,

    use: {
        baseURL: 'https://www.saucedemo.com',
    },
});
