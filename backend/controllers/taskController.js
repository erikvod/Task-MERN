// Import necessary modules
const asyncHandler = require('express-async-handler');
const Task = require('../model/taskModel');
const User = require('../model/userModel');

// Get all tasks for a user
const getTasks = asyncHandler(async (req, res) => {
    const tasks = await Task.find({ user: req.user.id });
    res.status(200).json(tasks);
});

// Create a new task
const createTask = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error('Please enter a task');
    }
    const task = await Task.create({ text: req.body.text, user: req.user.id });
    res.status(200).json(task);
});

// Update an existing task
const updateTask = asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id);

    if (!task) {
        res.status(404);
        throw new Error('Task not found');
    }

    const user = await User.findById(req.user.id);

    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }

    if (task.user.toString() !== user.id) {
        res.status(401);
        throw new Error('User not authorized to update');
    }

    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedTask);
});

// Delete an existing task
const deleteTask = asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id);

    if (!task) {
        res.status(400);
        throw new Error('Task not found');
    }

    const user = await User.findById(req.user.id);
    
    if (!user) {
        res.status(401);
        throw new Error('User not found');
    }

    if (task.user.toString() !== user.id) {
        res.status(401);
        throw new Error('User not authorized to delete');
    }
    
    await Task.findByIdAndDelete(req.params.id);

    res.status(200).json({ id: req.params.id });
});

// Export the controller functions
module.exports = { getTasks, createTask, updateTask, deleteTask };