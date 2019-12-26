var mongoose = require("mongoose");
Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    image: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    likes: {
      type: Number,
      required: true
    },
    comments: [
      {
        type: String,
        required: true
      }
    ],
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: "true"
    }
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = mongoose.model("Post", postSchema);
