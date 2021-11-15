// import all models
//const Post = require('./Post');
//const User = require('./User');
const Employee = require("./employee");
const Address = require("./address");
const User = require("./User");

// create associations
Address.hasMany(Employee, {
  foreignKey: "address_id",
});

Employee.belongsTo(Address, {
  foreignKey: "address_id",
});

Employee.belongsTo(User, {  
  foreignKey: "email"
})

module.exports = { Employee, Address, User };
