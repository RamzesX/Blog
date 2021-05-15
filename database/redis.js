const redis = require("redis");


const redisClient = redis.createClient(
    {
        port: 5555,
    }
);



redisClient.on("error", function(error) {
    console.error(error);
  });


  redisClient.set('user', 'sessionid', redis.print);
  redisClient.get('user', redis.print);

  module.exports = redisClient;