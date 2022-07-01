const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  post_title: {
    type: String,
    require: true,
  },
  post_desc: {
    type: String,
    require: true,
  },
  title_color: {
    type: String,
    require: true,
  },
  comments: [
    {
      comment: { type: String, require: true },
    },
  ],
});

module.exports = mongoose.model('post', PostSchema);
