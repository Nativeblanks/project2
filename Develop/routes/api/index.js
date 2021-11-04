const router = require("express").Router();
const employeeRoutes = require("./employee-routes");
const addressRoutes = require("./address-routes");
//const tagRoutes = require('./tag-routes');

router.use("/employee", employeeRoutes);
router.use("/address", addressRoutes);
//router.use('/tags', tagRoutes);

module.exports = router;
