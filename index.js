

process.on('uncaughtException', err => {
    console.error('There was an uncaught error', err)
    ////process.exit(1) //mandatory (as per the Node.js docs)
  })


const post = require('./database/models/Post')
const db = require('./database/database')
const app = require('./expresSetUp')
const express = require('express')
const Post = require('./database/models/Post')



var parser = require('cookie-parser');


  redisClient = require('./database/redis.js');
  app.use(parser()); // cookie-parser
  var session2 = require('express-session');
  RedisStore = require('connect-redis')(session2);
  redisClient.on('error', console.error)

  sessionStorage = new RedisStore({
    client: redisClient
  });
  


  app.use(session2({
    store: sessionStorage,
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    httpOnly: false,
    secure: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24
    }
    
  })
  )


console.log(session2.Store)



paszport = require('./passportSetUp.js');








app.post('/login', function(req, res) {
  res.redirect('/');
});

const port = 4000
app.listen(port, () => {
  console.log('App listening at http://localhost:4000')
})
	









