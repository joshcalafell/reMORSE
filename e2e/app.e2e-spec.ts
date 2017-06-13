import { JSPhoneticAlphabetPage } from './app.po';

describe('js-phonetic-alphabet App', () => {
  let page: JSPhoneticAlphabetPage;

  beforeEach(() => {
    page = new JSPhoneticAlphabetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
