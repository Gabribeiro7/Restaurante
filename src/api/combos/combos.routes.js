const express = require("express");
const controller = require("./combos.controller");

const router = express.Router();

router.get("/", controller.indexGet);

router.get("/:id", controller.getById);

router.get("/getByCombo/:combo", controller.getByCombo);

router.get("/getByDishe/:dishe", controller.getByDishe);

router.post("/create", controller.createPost);

router.put("/edit/:id", controller.editPut);

router.delete("/delete/:id", controller.deleteCombo);

module.exports = router;
