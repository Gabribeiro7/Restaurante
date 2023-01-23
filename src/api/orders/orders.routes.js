const express = require('express');
const controller = require('./orders.controller');

const router = express.Router();

router.get("/", controller.indexGet);

router.get("/:id", controller.getById);

router.get("/getByDishe/:dishe", controller.getByDishe);

router.get("/getByCombo/:combo", controller.getByCombo);

router.post('/create' , controller.createPost);

router.put("/edit/:id", controller.editPut);

router.delete("/delete/:id", controller.deleteOrder);



module.exports = router;