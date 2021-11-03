const router = require("express").Router();
const employeeRoutes = require("./employee-routes");
//const productRoutes = require('./product-routes');
//const tagRoutes = require('./tag-routes');

router.use("/employee", employeeRoutes);
//router.use('/products', productRoutes);
//router.use('/tags', tagRoutes);

module.exports = router;
