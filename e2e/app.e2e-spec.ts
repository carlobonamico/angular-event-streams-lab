import { EventsDemoPage } from './app.po';

describe('events-demo App', () => {
  let page: EventsDemoPage;

  beforeEach(() => {
    page = new EventsDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
