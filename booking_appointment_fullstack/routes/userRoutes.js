const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/adduser", userController.addUser);
router.get("/getuser", userController.getUsers);
router.delete("/deleteuser/:id", userController.deleteUser);
router.put("/edituser/:id", userController.editUser);

module.exports = router;
