const router = require("express").Router();
const employeeRoutes = require("./employee-routes");
const addressRoutes = require("./address-routes");

router.use("/employee", employeeRoutes);
router.use("/address", addressRoutes);

module.exports = router;
