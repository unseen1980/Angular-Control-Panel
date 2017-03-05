import { NgControlPanelPage } from './app.po';

describe('ng-control-panel App', () => {
  let page: NgControlPanelPage;

  beforeEach(() => {
    page = new NgControlPanelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
