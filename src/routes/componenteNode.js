var express = require("express");
var router = express.Router();

var componenteNodeController = require("../controllers/componenteNodeController")

router.get("/", (_req, res) => {
    componenteNodeController.listarComponentesNode(_req, res)
});

module.exports = router;
