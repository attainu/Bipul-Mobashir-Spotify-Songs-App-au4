const express = require('express');
const app = express();
const dotenv = require('dotenv');

//Import Routes
const usersRoute = require('./Routes/users');
const postRoute = require('./Routes/posts');
const favouritesRoute = require('./Routes/favouritesRoute');
const playlistRoutes = require('./Routes/playlistsRoute');
const songsRoutes = require('./Routes/songsRoute');
const communitiesRoute = require('./Routes/communityRoute');
const artistsRoute = require('./Routes/artistsRoute');

dotenv.config();

//Middleware
app.use(express.json());

//Routes Midddlewares
app.use('/user', usersRoute);
app.use('/', postRoute);
app.use('/', favouritesRoute);
app.use('/', playlistRoutes);
app.use('/', songsRoutes);
app.use('/', communitiesRoute);
app.use('/', artistsRoute);

module.exports = app;