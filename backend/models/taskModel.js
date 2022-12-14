const mongoose = require("mongoose");

// Schema = Determines how to structure/organize the data

const taskSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please add a task"], // User cannot leave a field empty when true
        },
        completed: {
            type: Boolean,
            required: true,
            default: false // To set the 'completed' tasks to have a status of false
        }
    },
    {
        timestamps: true // Automatically generate a timestamp for creating/updating a database
    }
)

const Task = mongoose.model("task", taskSchema)

module.exports = Task