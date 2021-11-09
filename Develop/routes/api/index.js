const router = require("express").Router();
const employeeRoutes = require("./employee-routes");
const addressRoutes = require("./address-routes");
const userRoutes = require("./user-routes");

router.use("/employee", employeeRoutes);
router.use("/address", addressRoutes);
router.use("/user", userRoutes);

module.exports = router;
