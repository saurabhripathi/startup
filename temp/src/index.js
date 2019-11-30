// const express = require('express');
// const path = require('path');

// const http = require('http');
// const bodyParser = require('body-parser');

// // Get our API routes
// const api = require('./Backend/api');


// const app = express();

// // Parsers for POST data
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// // Point static path to dist
// app.use(express.static(path.join(__dirname, 'dist/COOK')));

// // Set our api routaes
// app.use('/api', api);


// // Catch all other routes and return the index file
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/COOK/index.html'));
// });



//  app.listen(3000);
//  console.log('app is running');

require('./db/mongoose')
const User=require('./models/customer')
const express=require('express')
const app=express()
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const register=require('./routes/register');
const varify=require('./routes/varify')

app.use(bodyParser.json());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use( register);
app.use(varify)

const user=new User({
    // email:"asd@gmail.com"
    phoneNumber:7028182059
})

// user.save().then(()=>{
//     console.log(user)

// }).catch((error)=>{
//     console.log(error)
// })

app.listen(5000,()=>{
    console.log("up")
})