const Post = require('../models/postModel');

exports.getPosts = async (req, res, next) => {
  try {
    const post = await Post.find();
    console.log('👍👍');
    res.status(200).json({
      results: post.length,
      post: post,
    });
    next();
  } catch (err) {
    next(err);
  }
};

// exports.midware = (req, res, next) => {
//   console.log(req.body);
//   const { title, description } = req.body;
//   if (!title) res.send('Post must have a tile');
//   res.status(200).json(req.body);
//   next();
// };

exports.createPosts = async (req, res, next) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json({
      post,
    });
    next();
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.updatePosts = async (req, res, next) => {
  //   try {
  //     const post = await Post.findOne({ title: req.body.title });
  //     if (!post) {
  //       res.status(401).json({ err: 'no post with the given title' });
  //     }
  //     const updatedPost = await Post.update(req.body);
  //     updatedPost.save();
  //     res.status(201).json(updatePost);
  //   } catch (err) {
  //     next(err);
  //   }
  //   // try {
  //   //   const post = await Post.findOneAndUpdate(
  //   //     { title: req.body.title },
  //   //     req.body
  //   //   );
  //   //   post.save;
  //   //   res.send('sucesss');
  //   // } catch (error) {}
};
