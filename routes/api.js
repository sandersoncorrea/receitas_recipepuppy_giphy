var express = require("express");
var router = express.Router();

import ReceitasController from "../controllers/ReceitasController";

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/receitas", ReceitasController.index);

module.exports = router;
