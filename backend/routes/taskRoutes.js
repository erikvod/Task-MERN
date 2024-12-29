const express = require('express');
const router = express.Router();
const {getTasks, createTask, updateTask, deleteTask} = require('../controllers/taskController');

const {protect} = require('../middleware/authMiddleware');

router.get('/', protect, getTasks);  // GET all tasks
router.post('/', protect, createTask);  // POST a task
router.put('/:id', protect, updateTask);  // PUT a task
router.delete('/:id', protect, deleteTask);  // DELETE a task

module.exports = router;  // Export the router object