const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

class User extends Model {}

User.init({
  userId: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'user'
});
User.associate = models => {
  User.hasMany(models.Post, {
    onDelete: 'cascade'
  });
};
module.exports = User;
