import { AppImage } from './cmp-image';

describe('cmp-image', () => {
  it('builds', () => {
    expect(new AppImage()).toBeTruthy();
  });

  describe('getImage', () => {
    it('returns a blank string if the img is null', () => {
      const component = new AppImage();
      expect(component.getImg(undefined)).toEqual('');
    });

    it('returns a blank string if the img is null', () => {
      const component = new AppImage();
      expect(component.getImg(null)).toEqual('');
    });

    it('returns the image with the default image directory', () => {
      const component = new AppImage();
      expect(component.getImg('photo.jpg')).toEqual(component.imgDirectory + 'photo.jpg');
    });

    it('returns the image with a custom image directory', () => {
      const component = new AppImage();
      component.imgDirectory = 'assets/icons/';
      expect(component.getImg('photo.png')).toEqual('assets/icons/photo.png');
    });
  });
});
