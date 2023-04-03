const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class PostComment extends Model {}

PostComment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "post",
        key: "id",
        unique: false,
      },
    },
    comment_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "comment",
        key: "id",
        unique: false,
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "post_comment",
  }
);

module.exports = PostComment;
