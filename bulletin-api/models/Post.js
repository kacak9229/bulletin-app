// Post Model - attributes(id, title, content, picture)
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Post;
};
