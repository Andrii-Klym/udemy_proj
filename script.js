const numberOfFilms = +prompt('скільки фільмів ви вже переглянули', '');

const personalMovieDB = {
     count: numberOfFilms,
     movies: {},
     actors: {},
     genres: [],
     private: false
};

/* const a = prompt('Один із переглянутих фільмів', ''),
      b = prompt('на скільки ви його оціните', ''),
      c = prompt('Один із переглянутих фільмів', ''),
      d = prompt('на скільки ви його оціните', '');
 */

for (let i = 0; i < 2; i++) {
     const a = prompt('Один из последних просмотренных фильмов?', ''),
           b = prompt('На сколько оцените его?', '');
 
     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
         personalMovieDB.movies[a] = b;
         console.log('done');
     } else {
         console.log('error');
         i--;
     }
 }
 
