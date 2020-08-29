const numberOfFilms = +prompt('скільки фільмів ви вже переглянули', '');

const personalMovieDB = {
     count: numberOfFilms,
     movies: {},
     actors: {},
     genres: [],
     private: false
};

const a = prompt('Один із переглянутих фільмів', ''),
      b = +prompt('на скільки ви його оціните', ''),
      c = prompt('Один із переглянутих фільмів', ''),
      d = +prompt('на скільки ви його оціните', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB)