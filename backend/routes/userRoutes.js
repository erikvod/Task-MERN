const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getCurrentUser } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', registerUser);  // POST a user
router.post('/login', loginUser);  // POST a user
router.get('/current', protect, getCurrentUser);  // GET the current user

module.exports = router;  // Export the router object