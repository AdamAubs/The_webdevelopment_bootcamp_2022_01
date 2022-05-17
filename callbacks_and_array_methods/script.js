const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]


// numbers.forEach(function (el){
//     if(el % 2 === 0){
//     console.log(el)
//     }
// })
// 

// for(let el of numbers){
//     console.log(el)
// }

//const timestwo = numbers.map(function(num){
//    return num * 2
//})
//console.log(timestwo)

// const lessThanTen = numbers.filter(num =>{
//     return num < 10;
// })

// numbers.some(num => num < 0);


const movies = [
    {
        title: 'Batman',
        score: 100,
        year: 2020
    },
    {
        title: 'KingKon',
        score: 25,
        year: 2000,
    },
    {
        title: 'Waterbottle',
        score: 78,
        year: 2019
    },
    {
        title: 'coolBeans',
        score: 89,
        year: 2013
    },
    {
        title: 'HippoFun',
        score: 67,
        year: 2012
    },
    {
        title: 'How to go to bed',
        score: 77,
        year: 2010
    },
]

// movies.forEach(function(movie) {
//     console.log(`${movie.title} - ${movie.score}/100`)
// })

// const titles = movies.map(function (movie){
//     return movie.title.toUpperCase();
// })
// console.log(titles)

//const newMovieScore = movies.map(movie => (
//    `${movie.title} - ${movie.score / 10}`
//))

// const newMovies = movies.filter(movie => {
//     return movie.year > 2015
// })
// 
// const badMovies = movies.filter(m => m.score < 70)
// const badMoviesTitles = badMovies.map(m => m.title)
// const badMovieTitles = movies.filter(m => m.score< 70).map(m => m.title)

// movies.every(movie => movie.year > 2000); //false
// movies.some(movie => movie.year > 2000); //true

// const highestR = movies.reduce((bestMovie, currentMovie)=> {
//     if(bestMovie.score > currentMovie.score){
//         return bestMovie
//     }else{
//         return currentMovie
//     }
// })

const evens = [2,4,6,8,10]

// const total = evens.reduce((sum, num) => sum + num, 100) //adds to total

// const mutiply = function(x,y){
//     return x * y;
// }

// const mutiply = (x,y) =>{
//     return x * y;
// }

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) +1
// }

// const isEven = function(num){ //regular function expression 
//     return num % 2 === 0;
// }

// const isEven = (num) => { //arrow function with parenthesis around parameter
//     return num % 2 === 0;
// }

// const isEven = num => {   //no parenthesis around the parameter
//     return num % 2 === 0; 
// }

// const isEven = num => ( //implicit return
//     num % 2 === 0
// );

// const isEven = num => num % 2 === 0; //one-liner implicit return



//console.log('hello')
//setTimeout(() => {
//    console.log('...are you still there?')
//}, 3000)

//const id = setInterval(() =>{
//    console.log(Math.random())
//}, 2000);
//clearInterval(id)

const prices = [1.45, 1.99, 2.95, 3.00, 3.99, 4.50]

// let total = 0;
// for(let price of prices){
//     total += price
// }
// console.log(total)

// const total = prices.reduce((total, price) => {
//     return total + price
// })

// const total = prices.reduce((total, price) => total + price)

// const minPrice = prices.reduce((min, price) => {
//     if(price > min){
//         return min
//     }else{
//         return price;
//     }
// }) 

const person ={
    firstName: 'Adam',
    lastName: 'Aubry',
    fullName: function () {
        return `${this.firstName} ${this.lastName}` 
    },
    shoutName: function(){
        setTimeout(() => {
            console.log(this);
            console.log(this.fullName())
        }, 3000)
    }
}