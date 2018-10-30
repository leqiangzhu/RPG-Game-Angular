import { RPGPage } from './app.po';

describe('rpg App', () => {
  let page: RPGPage;

  beforeEach(() => {
    page = new RPGPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
