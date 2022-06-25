const express = require('express');
const app = express();
const morgan = require('morgan')

const AppError = require('./AppError')

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
    throw new AppError('password required', 401);
    // res.send('SORRY YOU NEED A PASSWORD!!!')
    //throw new AppError(401, 'OH NO ME OH MY PASSWORD REQUIRED')
}

// app.use((req,res,next) => {
//     console.log("THIS IS MY FIRST MIDDLEWARE!!")
//     next();
// })

app.get('/', (req,res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('HOME PAGE')
})

app.get('/error', (req,res) => {
    chicken.fly()
})

app.get('/dogs', (req,res) => {
    res.send('WOOF WOOF')
})

app.get('/secret', verifyPassword, (req,res) => {
    res.send("This is my secret")
})

app.get('/admin', (req,res) => {
    throw new AppError('You are not an Admin!', 403)
})

app.use((req,res) => {
    res.status(404).res.send('NOT FOUND!')
})

// app.use((err,req,res,next) => {
//     console.log('********************')
//     console.log('******ERROR*********')
//     console.log('********************')
//     next(err)
// })

app.use((err, req, res, next) => {
    const{status = 500, message = 'Something Went Wrong'} = err;
    res.status(status).send(message)
})

app.listen(3000, () => {
    console.log("listiening on port 3000")
})