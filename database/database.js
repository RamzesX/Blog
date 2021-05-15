const mongoose = require('mongoose');
a = mongoose.connect('mongodb://127.0.0.1/Nowa', {useNewUrlParser: true, useUnifiedTopology: true});

a.then(
    (valuee) => {console.log('App is connected to Mongodb') }, 
    (reasin) => { console.log('Something went wrong during connection to database')
})
    
  
const db = mongoose.connection;
module.exports = db


  