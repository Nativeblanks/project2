const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const employee = require('../models/employee')

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

router.get("/employee", (req,res) => {
  res.redirect('/')
})

module.exports = router;