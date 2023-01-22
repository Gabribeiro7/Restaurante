const express = require("express");
const controller = require("./dishes.controller");

const router = express.Router();

router.get("/", controller.indexGet);

router.get("/:id", controller.getById);

router.post("/create", controller.createPost);

router.put("/edit/:id", controller.editPut);

router.delete("/delete/:id", controller.deleteDishe);

module.exports = router;
