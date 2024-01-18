'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Social extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Social.belongsTo(models.Talent, { foreignKey: 'talentId' });
      // define association here
    }
  }
  Social.init({
    instagram: DataTypes.STRING,
    tiktok: DataTypes.STRING,
    thread: DataTypes.STRING,
    snapchat: DataTypes.STRING,
    x: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    talentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Social',
  });
  return Social;
};
