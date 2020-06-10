const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    max: 255,
    required: [true, 'A post must have a title'],
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    enum: ['programming', 'sport', 'food', 'travel'],
    required: [true, 'please select a category'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
  },
});

//middleware for post to check if the post has been updated
postSchema.pre('save', function (next) {
  if (!this.isModified('title') || this.isNew) next();
  if (!this.isModified('description') || this.isNew) next();

  this.updatedAt = Date.now();
  console.log(this.updatedAt);
  next();
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
