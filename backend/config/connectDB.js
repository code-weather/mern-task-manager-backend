// * METHOD 1 OF CONNECTING MongoDB *
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)

        console.log(`Yoo MongoDB is lit 🔥`);
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB


// Use this function in server.js to connect the mongoDB and start the server

// const startServer = async () => {
//     try {
//         await connectDB()
//         app.listen(PORT, () => {
//             console.log(`Server listening on PORT ${PORT}`);
//         });
//     } catch (error) {
//         console.log(error)
//     }
// };
// startServer();