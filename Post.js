const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');
const User = require('./User');

class Post extends Model { }

Post.init({
  userId: {
    type: DataTypes.STRING,
    references: {
      model: User,
      key: 'id'
    }
  },
  title: {
    type: DataTypes.STRING
  },
  content: {
    type: DataTypes.TEXT
  }
}, {
  sequelize,
  modelName: 'post'
});

Post.associate = models => {
  Post.belongsTo(models.User, {
    foreignKey: {
      allowNull: false
    }
  });
};
module.exports = Post;
