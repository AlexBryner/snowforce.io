import { AppAbout } from './app-about';

describe('app-about', () => {
  it('builds', () => {
    expect(new AppAbout()).toBeTruthy();
  });

  describe('normalization', () => {
    it('returns a blank string if the name is undefined', () => {
      const component = new AppAbout();
      expect(component.normalize(undefined)).toEqual('');
    });

    it('returns a blank string if the name is null', () => {
      const component = new AppAbout();
      expect(component.normalize(null)).toEqual('');
    });

    it('capitalizes the first letter', () => {
      const component = new AppAbout();
      expect(component.normalize('quincy')).toEqual('Quincy');
    });

    it('lower-cases the following letters', () => {
      const component = new AppAbout();
      expect(component.normalize('JOSEPH')).toEqual('Joseph');
    });

    it('handles single letter names', () => {
      const component = new AppAbout();
      expect(component.normalize('q')).toEqual('Q');
    });
  });
});
