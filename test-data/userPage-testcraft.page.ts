import { Locator, Page } from '@playwright/test';

export class UserPage {
    page: Page;
    usernameInput: string;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = 'input[data-test=username]';
    }

    async enterUsername(username: string): Promise<void> {
        await this.page.fill(this.usernameInput, username);
    }

    async getPlaceholder(): Promise<string | null> {
        return await this.page.getAttribute(this.usernameInput, 'placeholder');
    }
}

export class LoginPage {
    constructor(private page: Page) {}

    get usernameInput(): Locator {
        return this.page.locator('#user-name');
    }

    get passwordInput(): Locator {
        return this.page.locator('#password');
    }

    get loginButton(): Locator {
        return this.page.locator('#login-button');
    }

    get errorMessage(): Locator {
        return this.page.locator('.error-message-container');
    }

    async enterUsername(username: string) {
        await this.usernameInput.fill(username);
    }

    async enterPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async getErrorMessageText() {
        return this.errorMessage.textContent();
    }
}