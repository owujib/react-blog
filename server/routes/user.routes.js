const router = require('express').Router();
const userController = require('../controllers/auth.controller');
// const { Router } = require('express');
// const router = Router();

router.post('/signup', userController.signup);
router.post('/login', userController.login);

module.exports = router;
