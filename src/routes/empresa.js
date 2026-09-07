var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/empresaController")

router.get("/metricas", (req, res) => {
    empresaController.buscarMetricasPorToken(req, res)
});

router.get("/listarLimites/:idEmpresa", (req, res) => {
    empresaController.listarLimites(req, res)
});

module.exports = router;
