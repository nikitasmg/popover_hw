import puppetteer from 'puppeteer';

jest.setTimeout(30000);  // default puppeteer timeout
describe('popover', () => {
    let browser = null;
    let page = null;
    const baseUrl = 'http://localhost:9000';
    beforeAll(async () => {
        browser = await puppetteer.launch({
            // headless: false,
            // slowMo: 100,
            // devtools: true,
        });
        page = await browser.newPage();
    });
    afterAll(async () => {
        await browser.close();
    })
    test('should add .active class for popover', async () => {
        await page.goto(baseUrl);
        await page.$('.button');
        await page.click('button', { text: 'Click to toggle popover' })
        await page.waitForSelector('.popover.active')
        await page.click('button', { text: 'Click to toggle popover' })
        await page.waitForSelector('.popover')
    });
})