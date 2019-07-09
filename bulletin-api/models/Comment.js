module.exports = (sequlize, DataTypes) => {
  const Comment = sequlize.define("Comment", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Comment;
};
