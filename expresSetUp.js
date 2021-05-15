const express = require('express')
const app = express()
const port = 4000




app.all('/', function (req,res) {

    console.log(req.session);
    res.sendFile('./pages/index.html', {
        root: '/home/norbert/praca/projekty/Blog2'
    })
  })

path = require('path');
app.use('/',express.static(path.join(__dirname,'pages')))


/*
this code is used to import and run express edge engine

const { config, engine } = require('express-edge');
app.set('views', path.join(__dirname, 'views'))
app.use(engine);
*/


// app.use(require('morgan')('combined')); // for this moment i dont really know why i need it
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));


module.exports = app
