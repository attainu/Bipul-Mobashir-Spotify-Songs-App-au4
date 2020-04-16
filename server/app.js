const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

//Import Routes
const usersRoute = require('./Routes/users');
const authStatus = require('./Routes/authStatus');
const favouritesRoute = require('./Routes/favouritesRoute');
const playlistRoutes = require('./Routes/playlistsRoute');
const songsRoutes = require('./Routes/songsRoute');
const communitiesRoute = require('./Routes/communityRoute');
const artistsRoute = require('./Routes/artistsRoute');

dotenv.config();

//Middleware
app.use(express.json());
const corsOptions = {
    exposedHeaders: 'auth-token',
  };
  
app.use(cors(corsOptions));

//Routes Midddlewares
app.use('/user', usersRoute);
app.use('/', authStatus);
app.use('/', favouritesRoute);
app.use('/', playlistRoutes);
app.use('/', songsRoutes);
app.use('/', communitiesRoute);
app.use('/', artistsRoute);

module.exports = app;