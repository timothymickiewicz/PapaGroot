const router = require("express").Router();
const codRoutes = require("./codRoutes.js");

router.use("/codRoutes", codRoutes);

module.exports = router;