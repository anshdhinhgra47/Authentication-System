const express = require('express');

const router = express.Router();

const userController = require('../controllers/user_controller');
const userSignUp = require('../controllers/user_controller');
const userSignIn = require('../controllers/user_controller');

router.get('/welcome', userController.user);
router.get('/sign-up', userSignUp.signUp);
router.get('/sign-in', userSignIn.signIn);


module.exports = router;