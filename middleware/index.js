const express = require('express');
const app = express();
const morgan = require('morgan')

app.use(morgan('dev'))
app.use((req,res,next) => {
    req.requestTime = Date.now();
    console.log(req.method.toUpperCase(), req.path);
    next();
})

const verifyPassword = (req, res, next) => {
    const {password} = req.query;
    if(password === 'chickennugget'){
        next();
    }
    res.send('SORRY YOU NEED A PASSWORD!!!')
    next()
}

// app.use((req,res,next) => {
//     console.log("THIS IS MY FIRST MIDDLEWARE!!")
//     next();
// })

app.get('/', (req,res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('HOME PAGE')
})
app.get('/dogs', (req,res) => {
    res.send('WOOF WOOF')
})

app.get('/secret', verifyPassword, (req,res) => {
    res.send("This is my secret")
})

app.use((req,res) => {
    res.status(404).res.send('NOT FOUND!')
})

app.listen(3000, () => {
    console.log("listiening on port 3000")
})