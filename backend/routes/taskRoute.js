const express = require("express");
// const Task = require("../models/taskModel"); // ...Not required...moved controller to taskController.js
const router = express.Router();
const {
    createTask,
    getTasks,
    getOneTask,
    deleteTask,
    updateTask
} = require("../controllers/taskController");

router.route("/").get(getTasks).post(createTask);
router.route("/:id").get(getOneTask).delete(deleteTask).put(updateTask);

// router.post("/", createTask); // CREATE A TASK
// router.get("/", getTasks); // READ ALL TASKS
// router.get("//:id", getOneTask); // READ ONE TASK
// router.delete("/:id", deleteTask); // DELETE TASK
// router.put("/:id", updateTask); // UPDATE A TASK (UPDATING ENTIRE OBJECT)
// // router.patch("/api/tasks/:id", updateTask); // UPDATE A TASK (ONE SPECIFIC OBJECT)

module.exports = router