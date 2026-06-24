# Testing Guide for PizzaCraft Application

This document explains the unit and end-to-end testing setup for the PizzaCraft pizza ordering application running on Angular 20.

## Table of Contents

- [Unit Testing (Karma + Jasmine)](#unit-testing-karma--jasmine)
- [End-to-End Testing (Playwright)](#end-to-end-testing-playwright)
- [Test Configuration](#test-configuration)
- [Running Tests](#running-tests)
- [Writing New Tests](#writing-new-tests)
- [CI/CD Integration](#cicd-integration)

## Unit Testing (Karma + Jasmine)

### Overview

Unit tests are configured using:
- **Karma**: Test runner
- **Jasmine**: Testing framework
- **ChromeHeadless**: Browser for running tests (CI mode)

### Test Files

Unit test files are located alongside component files with `.spec.ts` extension:

```
src/app/
├── app.component.spec.ts
├── pizza-header/
│   └── pizza-header.component.spec.ts
├── pizza-main-layout/
│   └── pizza-main-layout.component.spec.ts
├── pizza-detail/
│   └── pizza-detail.component.spec.ts
└── cart/
    └── cart.component.spec.ts
```

### Key Configuration Files

#### `src/karma.conf.js`
Main Karma configuration with:
- Chrome browser launcher
- Jasmine test framework
- Code coverage reporting
- Watch mode for development

#### `src/test.ts`
Test entry point that:
- Initializes Angular testing environment
- Loads all `*.spec.ts` files
- Configures test platform

#### `src/tsconfig.spec.json`
TypeScript configuration for test files with:
- `jasmine` type definitions
- `ES2022` target for modern JavaScript
- Spec file inclusion patterns

### Component Testing Pattern

All components use standalone testing pattern with `imports` instead of `declarations`:

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyComponent } from './my.component';

describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponent],
      providers: [
        // Required providers
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

### Available Commands

#### Development Mode (Watch)
```bash
npm test
```
Runs tests in watch mode with live reloading. Useful during development.

#### CI Mode (Single Run)
```bash
npm run test:ci
```
Runs tests once with code coverage using ChromeHeadlessCI browser. Used in CI/CD pipelines.

## End-to-End Testing (Playwright)

### Overview

End-to-end tests are configured using:
- **Playwright**: E2E testing framework
- **Multiple browsers**: Chromium, Firefox, WebKit
- **Mobile testing**: iPhone and Android viewports

### Test Files

E2E tests are located in:

```
e2e/src/
├── app.spec.ts          # Main E2E test suite
├── tsconfig.e2e.json    # TypeScript config for E2E
└── ...
```

### Key Configuration Files

#### `playwright.config.ts`
Main Playwright configuration with:
- Test directory and file patterns
- Browser projects (Chrome, Firefox, Safari, Mobile)
- Base URL and timeout settings
- Web server auto-start
- HTML reporter for results

#### `e2e/tsconfig.e2e.json`
TypeScript configuration for E2E tests with:
- `@playwright/test` type definitions
- `ES2022` target
- Proper source file inclusion

### Test Coverage

E2E tests cover:

1. **Menu Page**
   - Display of pizza cards
   - Filter functionality
   - Add to cart functionality
   - Navigation to detail page

2. **Header Component**
   - Brand name display
   - Cart badge counter
   - Navigation links

3. **Cart Page**
   - Empty cart state
   - Item display
   - Price calculation with tax
   - Quantity controls
   - Item removal

4. **Detail Page**
   - Pizza details display
   - Add to cart from detail view

5. **Responsive Design**
   - Mobile viewport (375x667)
   - Tablet viewport (768x1024)

### Available Commands

#### Run All E2E Tests
```bash
npm run e2e
```
Runs all E2E tests in headless mode.

#### Interactive UI Mode
```bash
npm run e2e:ui
```
Launches Playwright Test UI for debugging and running specific tests.

#### Debug Mode
```bash
npm run e2e:debug
```
Runs tests with Playwright Inspector for step-by-step debugging.

## Test Configuration

### Karma Configuration (`src/karma.conf.js`)

Key settings:
- **Frameworks**: `jasmine`, `@angular-devkit/build-angular`
- **Plugins**: Karma-Jasmine, Chrome launcher, coverage reporter
- **Port**: 9876
- **Browsers**: Chrome (development), ChromeHeadlessCI (CI)
- **Coverage**: HTML and LCOV reports

### Playwright Configuration (`playwright.config.ts`)

Key settings:
- **Test directory**: `e2e/src`
- **Base URL**: `http://localhost:4200`
- **Projects**: Chromium, Firefox, WebKit, Mobile Chrome, Mobile Safari
- **Retries**: 2 (CI only)
- **Reporter**: HTML report
- **Web server**: Auto-starts `npm start`

## Running Tests

### Prerequisites

Ensure dependencies are installed:
```bash
npm install --legacy-peer-deps
```

### Unit Tests

**Development Mode**
```bash
npm test
```
- Opens Karma in browser
- Watch mode enabled
- Rerun on file changes

**CI Mode**
```bash
npm run test:ci
```
- Single run, no watch
- Code coverage enabled
- ChromeHeadlessCI browser
- Exits after completion

### E2E Tests

**All Tests (Headless)**
```bash
npm run e2e
```

**Interactive Mode**
```bash
npm run e2e:ui
```

**With Debugging**
```bash
npm run e2e:debug
```

**Specific Test File**
```bash
npx playwright test e2e/src/app.spec.ts
```

**Specific Test**
```bash
npx playwright test -g "should add pizza to cart"
```

**Single Browser**
```bash
npx playwright test --project=chromium
```

## Writing New Tests

### Unit Test Template

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YourComponent } from './your.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('YourComponent', () => {
  let component: YourComponent;
  let fixture: ComponentFixture<YourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourComponent],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideAnimationsAsync()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(YourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should do something', () => {
    // Test implementation
  });
});
```

### E2E Test Template

```typescript
import { test, expect } from '@playwright/test';

test.describe('Feature Name', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/path');
  });

  test('should display element', async ({ page }) => {
    await expect(page.locator('selector')).toBeVisible();
  });

  test('should perform action', async ({ page }) => {
    await page.locator('button').click();
    await expect(page).toHaveURL('/expected-path');
  });
});
```

### Best Practices

1. **Unit Tests**
   - Test component creation
   - Test user interactions (clicks, inputs)
   - Test output and bindings
   - Mock services and dependencies
   - Keep tests focused and isolated

2. **E2E Tests**
   - Test user workflows
   - Test across multiple pages
   - Test in different browsers
   - Test responsive behavior
   - Use data-testid for reliable selectors

3. **General**
   - Use descriptive test names
   - Keep tests independent
   - Clean up after tests
   - Test user behavior, not implementation
   - Maintain reasonable test execution time

## CI/CD Integration

### GitHub Actions Example

```yaml
name: Test

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '22.18.0'
      
      - name: Install dependencies
        run: npm install --legacy-peer-deps
      
      - name: Run unit tests
        run: npm run test:ci
      
      - name: Run E2E tests
        run: npm run e2e
      
      - name: Upload coverage
        if: always()
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/lcov.info
```

### Jenkins Example

```groovy
pipeline {
  stages {
    stage('Test') {
      steps {
        sh 'npm install --legacy-peer-deps'
        sh 'npm run test:ci'
        sh 'npm run e2e'
      }
    }
  }
  
  post {
    always {
      publishHTML([
        reportDir: 'coverage',
        reportFiles: 'index.html',
        reportName: 'Coverage Report'
      ])
      
      publishHTML([
        reportDir: 'playwright-report',
        reportFiles: 'index.html',
        reportName: 'E2E Report'
      ])
    }
  }
}
```

## Troubleshooting

### Tests Not Running

1. **Chrome not found**: Install Chrome browser or use ChromeHeadless
2. **Module not found**: Run `npm install --legacy-peer-deps`
3. **Port in use**: Kill process on port 9876 or 4200

### Slow Tests

1. Disable watch mode in CI
2. Run tests in parallel (Playwright default)
3. Use ChromeHeadless instead of Chrome
4. Increase timeout values

### Flaky Tests

1. Avoid hard-coded timeouts
2. Use Playwright's `expect()` with auto-retry
3. Mock external dependencies
4. Wait for elements before interactions

### Coverage Issues

1. Check `src/karma.conf.js` coverage configuration
2. Ensure spec files are properly structured
3. Run `npm run test:ci` to generate coverage reports
4. View coverage in `coverage/my-pizza-order-online/index.html`

## Resources

- [Karma Documentation](https://karma-runner.github.io/)
- [Jasmine Documentation](https://jasmine.github.io/)
- [Angular Testing Guide](https://angular.io/guide/testing)
- [Playwright Documentation](https://playwright.dev/)
- [Playwright Test Runner](https://playwright.dev/docs/test-intro)

## Coverage Goals

- Unit test coverage: > 80%
- E2E critical paths: 100%
- All components: Smoke tests (creation test minimum)
- All services: Business logic tests
- All routes: Navigation tests
