'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prestation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Prestation.belongsTo(models.Talent, { foreignKey: 'talentId' });
      // define association here
    }
  }
  Prestation.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.STRING,
    talentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Prestation',
  });
  return Prestation;
};
