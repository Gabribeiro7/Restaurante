const express = require("express");
const controller = require("./combos-croquetas.controller");

const router = express.Router();

router.get("/", controller.indexGet);

router.get("/:id", controller.getById);

router.get("/getByCombo/:combo", controller.getByCombo);

router.get("/getByCroqueta/:croqueta", controller.getByCroqueta);

router.post("/create", controller.createPost);

router.put("/edit/:id", controller.editPut);

router.delete("/delete/:id", controller.deleteComboCroqueta);

module.exports = router;