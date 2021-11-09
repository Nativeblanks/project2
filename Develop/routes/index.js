const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const loggedInHomeRoutes = require('./loggedInHome-routes');

router.use('/loggedIn', loggedInHomeRoutes);
router.use('/api', apiRoutes);
router.use('/', homeRoutes);


module.exports = router;