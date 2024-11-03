const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController')
const bodyparser = require('body-parser');
const jsonParser = bodyparser.json();

// get api READ All
router.get("/user", userController.getUsers);

// get api READ One
router.get("/user/:id", jsonParser, userController.getUser);

// post api CREATE
router.post("/user", jsonParser, userController.postUser);

// put api UPDATE
router.put("/user", jsonParser, userController.updateUser);

// delete api DELETE
router.delete("/user/:id", jsonParser, userController.deleteUser);


module.exports = router;