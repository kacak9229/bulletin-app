const router = require("express").Router();

const Post = require("./models/Post");

// GET -> get all the posts from the database
router.get("/posts", (req, res) => {
  // Get all the posts
});

// POST - create a post and store in a database
router.post("/posts", async (req, res) => {
  // create a post
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
    res.json({
      success: false,
      message: "Failed to create a post"
    });
  }
});

module.export = router;
