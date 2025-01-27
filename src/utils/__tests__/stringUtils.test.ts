import {stringUtils} from '@utils';

describe('stringUtils', () => {
  describe('capitalizeFirstLetter', () => {
    it('should capitalize the first letter of each word', () => {
      stringUtils.capitalizeFirstLetter('David rappa');
      stringUtils.capitalizeFirstLetter('DaVid RAPPA');
      stringUtils.capitalizeFirstLetter('david rappa');

      expect(stringUtils.capitalizeFirstLetter('David rappa')).toBe(
        'David Rappa',
      );
      expect(stringUtils.capitalizeFirstLetter('DaVid RAPPA')).toBe(
        'David Rappa',
      );
      expect(stringUtils.capitalizeFirstLetter('david rappa')).toBe(
        'David Rappa',
      );
    });

    it('should return an empty string if the input is an empty string', () => {
      expect(stringUtils.capitalizeFirstLetter('')).toBe('');
    });
  });
});
