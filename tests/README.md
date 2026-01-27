* **Details**
   *
   * By default, the `data-testid` attribute is used as a test id. Use
   * [selectors.setTestIdAttribute(attributeName)](https://playwright.dev/docs/api/class-selectors#selectors-set-test-id-attribute)
   * to configure a different test id attribute if necessary.
   *
   * ```js
   * // Set custom test id attribute from @playwright/test config:
   * import { defineConfig } from '@playwright/test';
   *
   * export default defineConfig({
   *   use: {
   *     testIdAttribute: 'data-pw'
   *   },
   * });


npm init playwright@latest         

   npx playwright test --headed .\tests\example.spec.ts

    npx playwright show-report     

    npx playwright codegen https://www.saucedemo.com/   

    npx playwright show-trace trace.zip - urochomic  lokalnie nagrany trace - musi byc urochomione w folderze z trace

    Traceviewer - review test recordings: playwright.config.ts
    trace: 'retain-on-failure', // nagranie z krokami w timelinie
    video: 'retain-on-failure', // tworzenie video dla failujących testów

