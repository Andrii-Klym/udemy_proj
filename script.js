'use strict';

const numberOfFilms = +prompt('скільки фільмів ви вже переглянули', '');

const personalMovieDB = {
     count: numberOfFilms,
     movies: {},
     actors: {},
     genres: [],
     private: false
};

for (let i = 0; i < 2; i++) {
     const a = prompt('Один із переглянутих фільмів?', ''),
           b = prompt('на скільки ви його оціните?', '');

     if(a != null && b != null && a != '' && b != '' && a.length < 50) {
          personalMovieDB.movies[a] = b;
          console.log('done');
     } else {
          i--;
     }
 }

if (personalMovieDB.count < 10) {
     console.log('Переглянуто досить мало фільмів');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
     console.log('Ви класний глядач');
} else if(personalMovieDB.count >=30) {
     console.log('Ви кіноман');
} else {
     console.log('Виникла помилка');
}

 console.log(personalMovieDB);