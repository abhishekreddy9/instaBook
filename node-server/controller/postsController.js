const Post = require("../models/post");
const User = require("../models/user");

exports.getAllPosts = (req, res) => {
  let result;
  Post.find()
    .populate("userId")
    .then(resultSet => {
      result = resultSet;
      console.log("12345678");
      res.send(result);
    });
};

exports.addPost = (req, res) => {
  console.log(
    req.body.image,
    req.body.description,
    req.body.likes,
    req.body.comments
  );

  let postBody = {
    image: req.body.image,
    description: req.body.description,
    likes: req.body.likes,
    comments: req.body.comments,
    userId: "5e01f389cb1e835d6e2a7975"
  };

  console.log(postBody);

  let post = new Post(postBody);
  post
    .save()
    .then(resul => {
      User.findById("5e01f389cb1e835d6e2a7975")
        .then(result => {
          console.log("---------");
          console.log(result);
          console.log(resul);
          result.posts.push(resul);
          result.save();
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};

exports.deletePost = (req, res) => {
  // let postId = req.params.postId;
  User.update(
    { _id: "5e01f389cb1e835d6e2a7975", posts: "5e02e5f9b3ecb874c80fbd31" },
    { $pull: { posts: "5e02e5f9b3ecb874c80fbd31" } },
    { multi: true },
    function(err, status) {}
  );

  // Post.findByIdAndDelete("5e02e5aeb3ecb874c80fbd30")
  //   .then(result => {
  //     console.log(result);
  //   })
  //   .catch(err => console.log(err));
};
