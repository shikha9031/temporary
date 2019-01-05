import { TemporaryPage } from './app.po';

describe('temporary App', function() {
  let page: TemporaryPage;

  beforeEach(() => {
    page = new TemporaryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
