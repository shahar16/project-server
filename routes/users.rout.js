const express = require('express');
const userController = require('../controllers/users.controller');
const cartController = require('../controllers/cart.controller');
const storeController = require('../controllers/store.controller');

const router = express.Router();
const isAuth = require("../middlewares/isAuth");

router.post('/login', userController.login);
router.post('/register', userController.register);
router.post('/seedUsers', isAuth, userController.seedUsers);//router.post('/deleteUsers', isAuth, controller.removeAllUsersFromDb);
router.post('/deleteUsers', userController.removeAllUsersFromDb);
router.post('/addDbUsers', userController.addDbUsers);
router.post('/addtocart', isAuth, cartController.addToCart, storeController.updateProduct);
router.post('/removefromcart', isAuth, cartController.removeFromCart, storeController.updateProduct);
router.post('/editcartitems', isAuth, cartController.editCartItems, storeController.updateProduct);
router.get('/getcart', isAuth, cartController.getCart);
//TODO: deleteuser -> deleteStore -> deleteProductsInStore



module.exports = router