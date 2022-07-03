const express = require('express');
const PostModel = require('../models/posts');
const router = express.Router();
const mongoose = require('mongoose');
const {
  postValidations,
  updatePostValidations,
} = require('../validations/posts');

router.post('/', async (req, res) => {
  const { error } = postValidations(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //console.log(req.body.student_name);

  let post = new PostModel({
    post_title: req.body.post_title,
    post_desc: req.body.post_desc,
    title_color: req.body.title_color,
    comments: [],
  });
  try {
    const newPost = await post.save();
    res.status(200).send(newPost);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.get('/', async (req, res) => {
  try {
    let posts = await PostModel.find();
    res.status(200).send(posts);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.put('/:postId', async (req, res) => {
  const { error } = updatePostValidations(req.body);
  if (error) return res.status(400).send(error.message);

  try {
    let post = await PostModel.findOneAndUpdate(
      { _id: req.params.postId },
      { $addToSet: { comments: { comment: req.body.comment } } },
      { new: true }
    );
    if (!post) {
      res.status(404).send('Post Cannot found! please check the Id');
    } else {
      let updatedPost = await post.save();
      let posts = await PostModel.find();
      res.status(200).send(posts);
    }
  } catch (e) {
    res.status(400).send(e.message);
  }
});

module.exports = router;
