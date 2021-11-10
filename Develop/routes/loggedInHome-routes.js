const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');

router.get('/', (req, res) => {
    res.render('loggedInHome', { loggedIn: true });
  });
  router.get('/addform', (req, res) => {
    res.render('addform')
  });
module.exports = router;