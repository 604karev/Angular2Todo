import { A2TodoPage } from './app.po';

describe('a2-todo App', () => {
  let page: A2TodoPage;

  beforeEach(() => {
    page = new A2TodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
