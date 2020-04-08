const express = require('express');
const router = express.Router();

const songs = require('../Controllers/SongsController');
const verify = require('../verifyToken/verifyToken');

//Add a songs
router.post('/songs',verify, songs.create);

//Get all songs
router.get('/getAllSongs/:playlistid',verify, songs.findAll);

//Remove songs
router.delete('/songs/:trackid/:playlistid',verify, songs.delete);

module.exports = router;
