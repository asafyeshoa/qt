const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require("cors");
const app = express()
const routes = require('./routes')
app.use(express.json({limit: "50mb"}));
app.use(cors());
app.use('/', routes)

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose
    .connect(process.env.MONGO_URI, options)
    .catch((error) => console.error(error.message));
app.listen(process.env.PORT || 3000, () =>
    console.log("listening on " + (process.env.PORT || 3000))
);

const dbConnection = mongoose.connection;

dbConnection.on('disconnected', () => {
    console.log('database is disconnected');
})
dbConnection.on('error', console.error.bind(console, 'connection error:'));
