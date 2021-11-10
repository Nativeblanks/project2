const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');

router.get('/', (req, res) => {
    res.render('loggedInHome', { loggedIn: true });
  });

module.exports = router;