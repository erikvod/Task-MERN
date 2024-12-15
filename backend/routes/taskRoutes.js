const express = require('express');
const router = express.Router();
const {getTasks, createTask, updateTask, deleteTask} = require('../controllers/taskController');

router.get('/', getTasks);  // GET all tasks
router.post('/', createTask);  // POST a task
router.put('/:id', updateTask);  // PUT a task
router.delete('/:id', deleteTask);  // DELETE a task

    module.exports = router;  // Export the router object