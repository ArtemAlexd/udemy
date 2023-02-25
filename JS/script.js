const numberOfFilms = +prompt("сколько фильмов вы уже просмотрели?","");

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
    };

 const a = prompt('один из посл просм фильмов?',''),
       b = prompt('как оцените его?',''),
       c = prompt('один из посл просм фильмов?',''),
       d = prompt('как оцените его?','');

       personalMovieDB.movies[a] = b;
       personalMovieDB.movies[c] = d;

      console.log(personalMovieDB);





