const express = require('express');
const controller = require('./clients.controller');

const router = express.Router();

router.post('/register' , controller.registerPost);
router.get("/", controller.indexGet);
router.post('/login', controller.loginPost);


module.exports = router;