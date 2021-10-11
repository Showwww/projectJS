'use strict';

let numberOfFilms;

function start() {
   numberOfFilms = +prompt("скільки фільмів подивились?", "");
 
   while (numberOfFilms  == ''|| numberOfFilms == null || isNaN(numberOfFilms)) { 
      numberOfFilms = +prompt("скільки фільмів подивились?", "");

   }
}
 start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
//1
function rememberMyFilm(){
for (let i = 0; i < 2; i++) {
let   a = prompt("Один з оснаттіх фільмів?", ""),
      b = prompt("Оцінка?", "");

if (a != null && b != null 
    && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
    } else{
        console.log('error');
        i--;
      }
    }
};
rememberMyFilm();
//2
function detectPersonalLevel() {
   

(personalMovieDB.count < 10) ? alert('мало фільмфів') :
(personalMovieDB.count >= 10 && personalMovieDB.count < 30) ? alert('GOOD!') : 
(personalMovieDB.count > 30) ? alert('EXELENT!') :
console.log('error');
     console.log(personalMovieDB);
}
 detectPersonalLevel();

function showMyDB(hidden) {
   (!hidden) ? 
   console.log( personalMovieDB) :
   console.log( 'eror');
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
   for(let i = 1; i<=3; i++){
      personalMovieDB.genres[i - 1] = prompt(`Ваш улюблений жарн ${i}`);
   }
}
writeYourGenres();
//do{
//     let a = prompt("Один з оснаттіх фільмів?", ""),
// } while ( a == 0 a > 50 && a) 
// console.log(personalMovieDB);
// if (4 == 4){
//     console.log('Ok!');
// } else {
//     console.log('error');
// }
// const num = 50;
// (num === 51) ? console.log('Ok!') : console.log('Error');
// switch (num) {
//     case 49:
//         console.log('notWork');
//         break;
//     case 100:
//         console.log('notWork');
//     case 51:
//         console.log('Bingo');
//         break;
//     default:
//         console.log('NO');
//         break;    
// }
// let a = +prompt('put number', '');
// (a > 0) ? alert('1') : (a < 0) ? alert('-1') : 
// (a == 0) ? alert('0') : console.log('error');
// let result, a, b, message;
// const login = 'BOSS';
// result = (a + b < 4) ? 'MALO' : 'MNOGO'; 

// (login == 'BRO') ? message = 'Helow BRO' :
// (login == 'BOSS') ? message = 'Helow BOSS' :
// (login == '') ? message = 'Erorr Login' :
// message = '404';
// console.log(message);
// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num++;
// }
// let i = 0;
// while (i < 3){
//     i++
// }
// let i;
// do{
//  i = +prompt('введіть число більше 100', 0);
// }
// while (i <= 100 && i);
// let num = prompt('pot');

// function showHello(num,c) {
//     console.log( b - c);
     
// }
// showHello( 90, 90);
// let userName = 'Вася';

// function showMessage() {
//   userName = "Петя"; // (1) изменяем значение внешней переменной

//   let message = 'Привет, ' + userName;
//   alert(message);
// }

// alert( userName ); // Вася перед вызовом функции
 
// showMessage();

// alert( userName ); 
// function firstMessage(params) {
   
// }
// let logger = function name() {
//   console.log("Hello"); 
// };
// // const calc = (a, b) => {return a + b};
// const fruit = "bompam mapfpfpfffhd";
// console.log(fruit.indexOf("m"));
// console.log(fruit.slice(0,5)); 
// console.log(fruit.substring(1,11)); 
// console.log(fruit.substr(0,5)); 
// // числа методи 

