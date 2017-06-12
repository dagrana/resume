import { DagranaCvPage } from './app.po';

describe('dagrana-cv App', () => {
  let page: DagranaCvPage;

  beforeEach(() => {
    page = new DagranaCvPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
