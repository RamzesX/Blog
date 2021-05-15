const mongoose = require('mongoose');
 
const PostSchema = new mongoose.Schema({
    name: String,
    description: String,
    post: String

  });
  


  const Post = mongoose.model('Post', PostSchema);


  const UserSchema = new mongoose.Schema({
    username: String,
    hash: String,
    salt: String

  });

  const User = new mongoose.model('User', UserSchema);


  module.exports.Post = Post
  module.exports.User = User


  