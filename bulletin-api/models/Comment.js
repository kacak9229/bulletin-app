module.exports = (sequlize, DataTypes) => {
  const Comment = sequlize.define("Comment", {
    text: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Comment;
};
