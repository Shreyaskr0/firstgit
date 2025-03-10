const express=require('express');
const router=express.Router();
const userController=require('../controllers/userController')

router.get("/",userController.getUsers);

router.post("/",userController.postUsers);

router.get("/:id",userController.getUsersByID);

module.exports = router;