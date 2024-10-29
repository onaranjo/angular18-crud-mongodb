const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController')
const bodyparser = require('body-parser');
const jsonParser = bodyparser.json();

// get api READ
router.get("/user", userController.getUsers);

// get api CREATE
router.post("/user", jsonParser, userController.postUsers);

// get api UPDATE
router.put("/user", jsonParser, userController.updateUsers);

// get api DELETE
router.delete("/user/:id", jsonParser, userController.deleteUsers);


module.exports = router;