const path = require('path');
const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection");
const exphbs = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);


// Set Handlebars as the default template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');



const employeeData = [
  {
    firstName: "bob",
    lastName: "the builder",
    title: "Boss"
  },
  {
    firstName: "billy",
    lastName: "joe",
    title: "Teacher"
  }
]




// app.get('/all-employees', (req, res) => {
//   // Handlebars requires an object to be sent to the index.handlebars file.
//   const data = {
//     employeeData: []
//   };
//   // Loop through the animals, and send those that are pets to the index handlebars file.
//   for (let i = 0; i < employeeData.length; i++) {
//     // Get the current animal.
//     let currentEmployee = employeeData[i];
//     data.employeedata.push(currentEmployee)
//   }
  
//   res.render('cards', data);
// });


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("App listening on port: " + PORT));
});
