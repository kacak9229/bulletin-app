// Libraries to access the Library
const Sequelize = require("sequelize");
const PostModel = require("./models/post");
const CommentModel = require("./models/comment");

// Use RDS when deploying
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres"
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

const Post = PostModel(sequelize, Sequelize);
const Comment = CommentModel(sequelize, Sequelize);

// Create a relationship between Post and Comment
Post.hasMany(Comment);
Comment.belongsTo(Post);

module.exports = {
  Post,
  Comment
};
