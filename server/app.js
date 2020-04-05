const express = require('express');
const app = express();
const dotenv = require('dotenv');

//Import Routes
const usersRoute = require('./Routes/users');
const postRoute = require('./Routes/posts');

dotenv.config();

//Middleware
app.use(express.json());

//Routes Midddlewares
app.use('/', usersRoute);
app.use('/', postRoute);


module.exports = app;