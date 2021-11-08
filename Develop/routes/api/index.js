const router = require("express").Router();
const employeeRoutes = require("./employee-routes");
const addressRoutes = require("./address-routes");
<<<<<<< HEAD
const homeRoutes = require('api/home-routes.js');

//const tagRoutes = require('./tag-routes');

router.use("/employee", employeeRoutes);
router.use("/address", addressRoutes);

//router.use('/tags', tagRoutes);
=======

router.use("/employee", employeeRoutes);
router.use("/address", addressRoutes);
>>>>>>> 5d9e6e30a6e0f34686134f5f3780177914578f88

module.exports = router;
