const express = require('express') 
const orderController = require('../controllers/order.controller'); 
const checkAuthMiddleware = require('../middleware/check-auth');
 
const router = express.Router(); 
 
router.get("/",checkAuthMiddleware.checkAuth, orderController.index); 

module.exports = router;