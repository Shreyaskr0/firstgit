const express=require('express');
const router=express.Router();
const cartController=require('../controllers/cartController')

router.get("/:userId",cartController.getCartByID);
router.post("/:userId", cartController.postCartByID);

module.exports = router;