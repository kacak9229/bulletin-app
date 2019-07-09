module.exports = (sequlize, DataTypes) => {
  const Post = sequlize.define("Post", {
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
      type: DataTypes.STRING
    },
    picture: {
      type: DataTypes.STRING
    }
  });

  return Post;
};
