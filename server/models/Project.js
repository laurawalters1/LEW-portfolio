const { Schema, model } = require("mongoose");

const moment = require("moment");

const projectSchema = new Schema(
  {
    title: String,
    description: String,
    imagePath: String,
    deployedLink: String,
    repoLink: String,
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

const Project = model("Project", projectSchema);

module.exports = Project;
