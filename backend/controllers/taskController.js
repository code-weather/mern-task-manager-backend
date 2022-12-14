// Controller => A file saving all of the callback functions and connecting the model and router

const Task = require("../models/taskModel");

// CREATE A TASK
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
};

// GET ALL TASKS
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find()
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

// GET A SINGLE TASK
const getOneTask = async (req, res) => {
    try {
        const { id } = req.params
        const task = await Task.findById(id)
        // If the id does not exist
        if (!task) {
            return res.status(404).json(`Cant nada w/ ID of ${id}`)
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

// DELETE TASK
const deleteTask = async (req, res) => {
    try {
        const { id } = req.params
        const task = await Task.findByIdAndDelete(id)
        // If the id does not exist
        if (!task) {
            return res.status(404).json(`Can't find and delete id ${id}`)
        }
        res.status(200).send("TASK IS DONE-ZO BRO! 💥")
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
};

// UPDATE A TASK
const updateTask = async (req, res) => {
    try {
        const { id } = req.params
        const task = await Task.findByIdAndUpdate(
            { _id: id },
            req.body,
            { new: true, runValidators: true } // Object specify making a new entry into the database
        )
        if (!task) {
            return res.status(404).json(`OH NAHH! Can't find ID ${id} to edit...no 🧢`)
        }

        res.status(200).send(task)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

module.exports = {
    createTask,
    getTasks,
    getOneTask,
    deleteTask,
    updateTask,
}