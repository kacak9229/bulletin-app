module.exports = (sequlize, DataTypes) => {
  const Post = sequlize.define("Post", {
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
