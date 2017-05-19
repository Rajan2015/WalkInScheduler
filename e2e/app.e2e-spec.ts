import { WalkInSchedulerPage } from './app.po';

describe('walk-in-scheduler App', () => {
  let page: WalkInSchedulerPage;

  beforeEach(() => {
    page = new WalkInSchedulerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
