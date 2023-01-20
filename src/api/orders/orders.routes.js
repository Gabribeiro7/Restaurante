const express = require("express");
const controller = require("./orders.controller");

const router = express.Router();

router.get("/", controller.indexGet);

router.get("/:id", controller.getById);

router.get("/getByOrder/:order", controller.getByOrder);

router.post("/create", controller.createPost);

router.put("/edit/:id", controller.editPut);

router.delete("/delete/:id", controller.deleteOrder);

module.exports = router;
