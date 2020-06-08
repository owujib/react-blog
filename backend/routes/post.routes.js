const express = require('express');
const Post = require('../models/postModel');

const router = express.Router();

//read data
router.get('/', async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json({
      results: post.length,
      post: post,
    });
  } catch (err) {
    console.log(err);
  }
});

//create data
router.post('/new', async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json({
      post,
    });
  } catch (err) {
    console.log(err);
  }
});

//update data
router.patch('/update-posts', async (req, res) => {
  res.send('updated');
});

module.exports = router;
