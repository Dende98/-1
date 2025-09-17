// const { act } = require("react");

const movies = {
  action: {
    'Mission Impossible': '/action/mission_impossible.mp4',
    'Die Hard': '/action/die_hard.mp4',
  },
  comedy: {
    'The Hangover': '/comedy/the_hangover.mp4',
    'Superbad': '/comedy/superbad.mp4',
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


// for (const key in movies) {
//   console.log(movies[key])
// }

// function findMovieByTitle(moviesObj, title) {
  
// }


function findMovieByTitle(moviesObj, title) {
  for(const key in moviesObj) {
    if (typeof moviesObj[key] === 'object') {
      const result = findMovieByTitle(moviesObj[key], title)
      if(result !== null){
        return result
      }
    } else if (key === title) {
      return moviesObj[key]
    }
  }
  return null
}

// console.log(findMovieByTitle(movies, 'Harry Potter'))
const whyYouDoThisObject = {
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

function deepCountProperties(obj, property) {
  let result = 0;
  for(const key in obj) {
    
  }
}

module.exports = {
  findMovieByTitle,
  deepCountProperties,
};
