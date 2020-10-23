const router = require("express").Router();
const codController = require('../controller/codController');

router.route("/stats")
    .get(codController.getStats)

router.route('/mwlogin')
    .get(codController.mwlogin)
    .post(codController.domwlogin)

module.exports = router;