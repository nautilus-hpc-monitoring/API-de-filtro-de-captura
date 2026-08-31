var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/empresaController")

router.get("/:idEmpresa", (req, res) => {
    empresaController.listarEmpresa(req, res)
});

module.exports = router;
