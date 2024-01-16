'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.Talent, { foreignKey: 'talentId' });
      // define association here
    }
  }
  Message.init({
    object: DataTypes.STRING,
    description: DataTypes.TEXT,
    mail: DataTypes.STRING,
    talentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};