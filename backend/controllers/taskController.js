const getTasks = (req, res ) => {
    res.status(200).json({ message: 'Get all tasks' });
}

const createTask = (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error('Please enter a task');
    }
    console.log(req.body);
    res.status(200).json({ message: 'Create a task' });
}

const updateTask = (req, res) => {
    res.status(200).json({ message: `Task ${req.params.id} updated` });
}

const deleteTask = (req, res) => {
    res.status(200).json({ message: `Task ${req.params.id} deleted` });
}

module.exports = { getTasks, createTask, updateTask, deleteTask };  // Export the controller functions