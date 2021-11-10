const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
<<<<<<< HEAD
const employee = require('../models/employee')
=======
const loggedInHomeRoutes = require('./loggedInHome-routes');
>>>>>>> 63ac8bcd9b123cc61bbc4659a165b79192c9d675

router.use('/loggedIn', loggedInHomeRoutes);
router.use('/api', apiRoutes);
router.use('/', homeRoutes);


router.get("/employee", (req,res) => {
  res.redirect('/')
})

module.exports = router;