import { FontOfficeAngular4Page } from './app.po';

describe('font-office-angular4 App', () => {
  let page: FontOfficeAngular4Page;

  beforeEach(() => {
    page = new FontOfficeAngular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
