const Sequelize = require("sequelize");
const PostModel = require("./models/post");
const CommentModel = require("./models/comment");

// Use RDS when deploying
const sequelize = new Sequelize(
  "bulletin",
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
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

Post.hasMany(Comment);
Comment.belongsTo(Post);

// sequelize.sync({ force: true }).then(() => {
//   console.log(`Database & tables created!`);
// });

module.exports = {
  Post,
  Comment
};
