const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp')
    .then(() => {
        console.log("CONNECTED")
    })
    .catch(err => {
        console.log("OH NO ERROR")
        console.log(err)
    })

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema);
// const batman = new Movie({title: 'Batman', year: 2000, score: 9.3, rating: 'PG-13'})


// Movie.insertMany([
//     {title: 'Batman', year: 2000, score: 9.2, rating: 'PG-13'},
//     {title: 'Starwars', year: 1979, score: 8.3, rating: 'R'},
//     {title: 'Alien', year: 1999, score: 7.5, rating: 'PG'},
//     {title: 'Top Gun', year: 2022, score: 9.5, rating: 'R'},
//     {title: 'Richard', year: 1986, score: 7.6, rating: 'PG-13'}
// ])
//     .then(data => {
//         console.log("IT WORKED")
//         console.log(data)
//     })