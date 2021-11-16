const router    = require('express').Router();
const sequelize = require('./../config/connection');
const { Employee, User, Address } = require('../models');

router.get('/', (req, res) => {
  console.log(req.session)
  res.render('homepage');
});

router.get('/employees', (req,res) => {
  Employee.findAll({}).then(dbPostData => {
    res.render('employees', dbPostData[0].get({ plain:true}));
  })
  .catch(err => {
    console.log(err);
  })
  console.log(dbPostData[0])
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