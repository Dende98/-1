const {
  findMovieByTitle,
  deepCountProperties,
} = require('../index');

describe('Object tasks', () => {
  let whyYouDoThisObject;
  let movies;

  whyYouDoThisObject = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: {
          a: 3,
          b: 4,
          c: {
            c: 5,
          },
        },
      },
    },
    f: 6,
  };

  movies = {
    action: {
      'Mission Impossible': '/action/mission_impossible.mp4',
      'Die Hard': '/action/die_hard.mp4',
    },
    comedy: {
      'The Hangover': '/comedy/the_hangover.mp4',
      Superbad: '/comedy/superbad.mp4',
    },
    drama: {
      'The Shawshank Redemption': '/drama/shawshank_redemption.mp4',
      'Forrest Gump': '/drama/forrest_gump.mp4',
    },
    fantasy: {
      'Harry Potter': '/fantasy/harry_potter.mp4',
      'The Lord of the Rings': '/fantasy/lotr.mp4',
    },
  };

  describe('findMovieByTitle', () => {
    it('returns movie title', () => {
      expect(findMovieByTitle(movies, 'Harry Potter')).toEqual('/fantasy/harry_potter.mp4');
    });
    it('check with different types of data', () => {
      expect(findMovieByTitle(movies, 'The Shawshank Redemption')).toEqual('/drama/shawshank_redemption.mp4');
    });
  });

  describe('deepCountProperties', () => {
    it('returns count of property', () => {
      expect(deepCountProperties(whyYouDoThisObject, 'a')).toEqual(2);
    });
    it('check with different types of data', () => {
      expect(deepCountProperties(whyYouDoThisObject, 'c')).toEqual(3);
    });
  });
});
