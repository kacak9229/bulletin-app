const router = require("express").Router();
const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

const { Post, Comment } = require("../sequelize");

aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_KEY,
  accessKeyId: process.env.AWS_KEY_ID
});

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    acl: "public-read",
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      cb(null, Date.now().toString());
    }
  })
});

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
router.post("/posts", upload.single("picture"), async (req, res) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      content: req.body.content,
      picture: req.file.location
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
