// function rollDie(numSides){
//     if(numSides === undefined){
//         numSides = 6
//     }    
//     return Math.floor(Math.random()*numSides )+1 
// }

// function rollDie(numSides = 6){
//     return Math.floor(Math.random()*numSides)+1
// }

// function greet(msg= "Hey there", person){ //wrong order for parameter
//     console.log(`${msg}, ${person}!`)
// }
// 
// function greet(person, msg= "Hey there"){ //correct order for parameter
//     console.log(`${msg}, ${person}!`)
// }


//SPREADING
//const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,155632];

//Math.max(...nums) 155632
//Math.max(nums) NaN

// const cats = ['picket', 'bobby', 'hillary']
// const dogs = ['dobe', 'lamar']
// 
// const allPets = [...cats, ...dogs]
// 
// const mapleWood = {isHard: true, color: 'light'}
// const walnutWood = {isSoft: true, color: 'beautiful'}
// 
// const bothWood = {...mapleWood, ...walnutWood}
// 
// const dataFromForm = {
//     email: 'adamaubry2362@thehub.com',
//     password: 'chickenlittle43',
//     username: 'barefootHuman'
// }
// 
// const newUser = {...dataFromForm, id: 2345, isAdmin: false}
// 


//REST
// function sum(){
//     console.log(arguments)
// }

// function sum(){
//     return arguments.reduce((total, el) => total +el)
// }

// function sum(...nums){
//     return nums.reduce((total, el) => total + el)
// }

// function raceResults(gold, silver, ...everyoneElse){
//     console.log(`Gold goes to: ${gold}`)
//     console.log(`Silver goes to: ${silver}`)
//     console.log(`And thanks to everyone else: ${everyoneElse}`)
// }

//Destructuring arrays
//const scores = [10034, 19211, 19212, 12912, 12919, 12913]
//
//const firstScore = scores[0];
//const secondScore = scores[1];
//
//const[num1, num2, ...restOfNumbers] = scores;

//Destructuring objects
const user = {
    email: 'hellopuppy@yohoo.com',
    password: 'notgoodpassword',
    firstName: 'Picket',
    lastName: 'Fence',
    born: 2001,
    died: 2090,
    bio: 'Picket Fence are a ok choice for your fencing soltion',
    city: 'Tiny Town',
    state: 'Asia'
}

const user2 = {
    email: 'hellodog@yohoo.com',
    password: 'Yumgoodpassword',
    firstName: 'Steel',
    lastName: 'House',
    city: 'Chunky Town',
    state: 'Canada'
}
// const firstName = user.firstName;
// const lastName = user.lastName;

// const {email , firstName, lastName, city} = user;
// 
// const {born: birthYear, died: deathYear = 'N/A'} = user;
// 

// const {city, state, died= 'N/A'} = user2

// function fullName(user){
//     return `${user.firstName} ${user.lastName}`
// }

// function fullName(user){
//     const {firstName, lastName} = user;
//     return `${firstName} ${lastName}`
// }

// function fullName ({firstName, lastName}){
//     return `${firstName} ${lastName}`
// }

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

// movies.filter((movie) => movie.score >= 80)
// movies.filter(({score})=> score >= 80)

// movies.map(movie => {
//     return `${movie.title} (${movie.year}) is rated ${movie.score}`
// })

// movies.map(({title, score, year}) =>{
//     return `${title} (${year}) is rated ${score}`
// })
