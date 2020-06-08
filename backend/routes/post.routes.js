const express = require('express');
const Post = require('../models/postModel');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const post = await Post.find();
    console.log(post);
    res.send(post);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
