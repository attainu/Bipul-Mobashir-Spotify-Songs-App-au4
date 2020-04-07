const express = require('express');
const router = express.Router();

const playlists = require('../Controllers/PlaylistsController');
const verify = require('../verifyToken/verifyToken');

//Add a playlists
router.post('/playlists',verify, playlists.create);

//Get all playlists
router.get('/getAllPlaylists',verify, playlists.findAll);

//Update playlists
router.put('/playlists/:id', verify, playlists.update)

//Remove playlists
router.delete('/playlists/:id',verify, playlists.delete);

module.exports = router;
