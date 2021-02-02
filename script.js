'use strict';

const personalMovieDB = {
     count: 0, 
     movies: {},
     actors: {},
     genres: [],
     privat: false,
     start: function() {
          personalMovieDB.count = +prompt('скільки фільмів ви вже переглянули', '');
      
          while (personalMovieDB.count === '' || personalMovieDB.count === null || isNaN(personalMovieDB.count)) {
              personalMovieDB.count = +prompt('скільки фільмів ви вже переглянули', '');
          }
      },
      rememberMyFilms: function() {
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
      },
      detectPersonalLevel: function() {
          if (personalMovieDB.count < 10) {
              console.log('Переглянуто досить мало фільмів');
         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
              console.log('Ви класичний глядач');
         } else if(personalMovieDB.count >=30) {
              console.log('Ви кіноман');
         } else {
              console.log('Виникла помилка');
         }
      },
      showMyDB: function (hidden) {
          if (!hidden) {
              console.log(personalMovieDB);
          }
       },
     toggleVisibleMyDB: function () {
          if (personalMovieDB.privat === false) {
               personalMovieDB.privat = true;
          } else if(personalMovieDB.privat === true) {
               personalMovieDB.privat = false;
          }
      },
      writeYourGenres: function() {
          for (let i = 1; i <= 3; i++) {
               let ganres = prompt(`Ваш улюблений жанр під номером ${i}`).toLowerCase();
                    if (ganres === '' || ganres === null) {
                    console.log('Ви ввели некоректні дані або неввели їх взагалі(');
                    i--;
                    } else {
                    personalMovieDB.genres[i - 1] = ganres;
               }
          }
          personalMovieDB.genres.sort();
          personalMovieDB.genres.forEach((item, i) => {
               console.log(`Улюблений жанр ${i + 1} - це ${item}`);
         });
      },

};
