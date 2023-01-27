const express = require("express");
const cors = require("cors");
require("dotenv").config();
const taskRoutes = require("./routes/taskRoute");
const mongoose = require("mongoose");
const { application } = require("express");
// const connectDB = require("./config/connectDB"); // Method 1 of connecting to MongoDB
// const Task = require("./models/taskModel"); // Not required. Moved controller to taskRoute.js

const app = express();

// MIDDLEWARE => It is those methods/functions/operations that are called BETWEEN processing the Request and sending the Response in your application method
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: ["http://localhost:3000", "https://mern-task-app-xpl9.onrender.com"],
})) // Backend will accept any request from URL
app.use("/api/tasks", taskRoutes); // * MUST BE BELOW cors()

// * Example used for what a middleware does on https://www.youtube.com/watch?v=miFEEqj1Xkc&list=PLQfqQHJBFM1_v2UaZ0nFshI06f_waErND&index=10&ab_channel=ZinoTrustAcademy (TIMESTAMP: 3:20) *
// const logger = (req, res, next) => {
//     console.log("Middleware ran");
//     console.log(req.method); // Shows which CRUD we use (i.e. POST, GET, PUT, DELETE)
//     next() // middleware functions that return a Promise will call next(value) when they reject or throw an error
// }

// * METHOD 2 OF CONNECTING mongoDB *
const PORT = process.env.PORT || 8000
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Yoo MongoDB ${PORT} is lit 🔥`)
        })
    })
    .catch((err) => console.log(err))