const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getCurrentUser } = require('../controllers/userController');

router.post('/', registerUser);  // POST a user
router.post('/login', loginUser);  // POST a user
router.get('/current', getCurrentUser);  // GET the current user

module.exports = router;  // Export the router object