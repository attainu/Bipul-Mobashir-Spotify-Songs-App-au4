const express = require('express');
const router = express.Router();

const artists = require('./../Controllers/ArtistController');

//Add Artist
router.post('/artists', artists.create);

//Get all artists
router.get('/getAllArtists', artists.findAll);

//Update popularity 
router.put('/popularity/:id', artists.update)

module.exports = router;