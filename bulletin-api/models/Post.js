const Model = Sequelize.Model;

class Post extends Model {}

Post.init(
  {
    // Attributes of Post
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    content: {
      type: Sequelize.STRING
    },
    picture: {
      type: Sequelize.STRING
    }
  },
  {
    sequelize,
    modelName: "post"
  }
);

module.export = Post;
