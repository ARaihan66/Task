require('dotenv').config();
const app = require('./App');
const mongoose = require('mongoose');

//Mongodb connection
mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Database connected successfully!!!");
    })
    .catch(() => {
        console.log("Database connection is failed!!!")
    })

//Create server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})