const router = require("express").Router();

const { Post } = require("../sequelize");

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

module.exports = router;
