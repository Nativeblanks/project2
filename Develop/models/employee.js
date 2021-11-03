const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
class Employee extends Model {}
Employee.init(
  {
      employee_id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true}
    , Firstname: {type: DataTypes.STRING, allowNull: false}
    , Lastname: {type: DataTypes.STRING, allowNull: false}
    , Title: {type: DataTypes.STRING, allowNull: false}
    , Phone: {type: DataTypes.STRING, allowNull: true}
    , Cell: {type: DataTypes.STRING, allowNull: true}
    , Email: {type: DataTypes.STRING, allowNull: false}
    , Hiredate: {type: DataTypes.DATE, allowNull: false}
    , Dateofbirth: {type: DataTypes.DATE, allowNull: false}
    , Linkedin: {type: DataTypes.STRING, allowNull: true}
    , Facebookaccount: {type: DataTypes.STRING, allowNull: true}
    , Twitteraccount: {type: DataTypes.STRING, allowNull: true}
    , Address_id: {type: DataTypes.INTEGER, allowNull: false}
  }
  ,
  {
    sequelize
    , timestamps: false
    , freezeTableName: true
    , underscored: true
    , modelName: 'employee'
  }
);
module.exports = Employee;