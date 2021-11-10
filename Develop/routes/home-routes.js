const router = require('express').Router();
const sequelize = require('./../config/connection');
const { Employee, User, Address } = require('../models');

router.get('/', (req, res) => {
  console.log(req.session)
  res.render('homepage');
});

<<<<<<< HEAD
router.get('/viewall', (req, res) => {
  res.render('employees')
})
=======
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});
router.get('/addform', (req, res) => {
  res.render('addform')
});

>>>>>>> 63ac8bcd9b123cc61bbc4659a165b79192c9d675

module.exports = router;