const router = require("express").Router();

const { Post, Comment } = require("../sequelize");

// GET -> get all the posts from the database
router.get("/posts", async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json({
      success: true,
      data: posts
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

// POST - create a post and store in a database
router.post("/posts", async (req, res) => {
  // create a post
  console.log(req.body);
  try {
    const post = await Post.create({
      title: req.body.title,
      content: req.body.content,
      picture: req.body.picture
    });
    res.json({
      success: true,
      data: post
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

// GET -> get one post from the database based on the params ID
router.get("/posts/:post_id", async (req, res) => {
  try {
    const post = await Post.findOne({ where: { id: req.params.post_id } });
    res.json({
      success: true,
      data: post
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

// POST - create a comment that belongs to a post
router.post("/posts/:post_id/comments", async (req, res) => {
  try {
    const comment = await Comment.create({
      text: req.body.text
    });
    const post = await Post.findOne({ where: { id: req.params.post_id } });
    const result = await post.setComments(comment);
    res.json({
      success: true,
      data: result
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

// GET - get all the comments belong to the Post ID
router.get("/posts/:post_id/comments/", async (req, res) => {
  try {
    const comment = await Comment.findAll({
      where: {
        PostId: req.params.post_id
      }
    });
    res.json({
      success: true,
      data: comment
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

module.exports = router;
