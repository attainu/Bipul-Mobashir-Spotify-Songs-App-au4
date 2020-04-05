const express = require('express');
const router = express.Router();

const favourites = require('../Controllers/FavouritesController');
const verify = require('../verifyToken/verifyToken');

//Add a favourites
router.post('/favourites',verify, favourites.create);

//Get all favourites
router.get('/getAllFavourites/:userId',verify, favourites.findAll);

//Remove favourites
router.delete('/favourites/:trackId',verify, favourites.delete);

module.exports = router;