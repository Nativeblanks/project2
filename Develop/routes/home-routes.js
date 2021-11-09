const router = require('express').Router();
const sequelize = require('./../config/connection');
const { Employee, User, Address } = require('../models');

router.get('/', (req, res) => {
  console.log(req.session)
  res.render('homepage');
});

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


module.exports = router;