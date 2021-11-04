const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
class Address extends Model {}
Address.init(
  {
      Address_id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true}
    , Organization: {type: DataTypes.STRING, allowNull: false}
    , Addressline1: {type: DataTypes.STRING, allowNull: false}
    , Addressline2: {type: DataTypes.STRING, allowNull: true}
    , City: {type: DataTypes.STRING, allowNull: false}
    , State: {type: DataTypes.STRING, allowNull: false}
    , Zip: {type: DataTypes.STRING, allowNull: false}
    , Phone: {type: DataTypes.STRING, allowNull: true}
    , Fax: {type: DataTypes.STRING, allowNull: true}  
  }
  ,
  {
    sequelize
    , timestamps: false
    , freezeTableName: true
    , underscored: true
    , modelName: 'address'
  }
);
module.exports = Address;