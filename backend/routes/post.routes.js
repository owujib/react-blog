const express = require('express');
const postController = require('../controllers/post.controller');
const authController = require('../controllers/auth.controller');

const router = express.Router();

//read data
router.get('/', postController.getPosts);

//create data
router.post('/new', postController.createPosts);

//update data
router.patch('/update-posts', postController.updatePosts);

module.exports = router;
