const { Schema, model } = require("mongoose");

const moment = require("moment");

const blogPostSchema = new Schema(
  {
    title: String,
    body: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const BlogPost = model("BlogPost", blogPostSchema);

module.exports = BlogPost;
