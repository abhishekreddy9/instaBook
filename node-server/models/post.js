var mongoose = require("mongoose");
Schema = mongoose.Schema;

const postSchema = new Schema({
  likes: {
    type: Number,
    required: true
  },
  comments: {
    type: Number,
    required: true
  }
  //   ,
  //   userId: {
  //     type: Schema.Types.ObjectId,
  //     ref: "User",
  //     required: "true"
  //   }
});

module.exports = mongoose.model("Post", postSchema);
