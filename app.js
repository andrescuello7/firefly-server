const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
require("dotenv").config();

const app = express();

//connect
mongoose.connect(`mongodb+srv://${process.env.user}:${process.env.password}@cluster0.qa9gg.mongodb.net/firefly?retryWrites=true&w=majority`);

//setting
app.set('port', process.env.PORT || 4000);
app.use(cors())

//middleware
app.set(morgan("dev"))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use("/api/auth", require("./src/routes/auth"));
app.use("/api/user", require("./src/routes/user"));
app.use("/api/home", require("./src/routes/home"));

//server
app.listen(app.get('port'), () => {
    console.log('server in function in port', app.get('port'))
});