const express = require("express");
const router = express.Router();

import ReceitasController from "../controllers/ReceitasController";

router.get("/", function (req, res, next) {
  res.render("index", { title: "Receitas" });
});
router.get("/recipes/:i", ReceitasController.index);

module.exports = router;
