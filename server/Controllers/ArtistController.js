const artist = require('./../Models/ArtistModel');
const Sequelize = require('sequelize');
//Create Artist
exports.create = async (req, res) => {
    try {
        let artists = await artist.create({
            artistname: req.body.artistname,
            imgurl: req.body.imgurl,
        })
        res.status(200).send(artists);
    } catch (error) {
        res.status(400).send(error);
    }
}

//Fetch all artists 

exports.findAll = async (req, res) => {
    try {
        let artists = await artist.findAll({
            attributes: ["id","artistname", "imgurl", "popularity"]
        })
        res.status(200).send(artists)
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.update = (req, res) => {
    try {
        artist.sync()
        .then(() => artist.update({popularity: Sequelize.literal('popularity + 1')}, {where: {id : req.params.id}}));
        res.status(200).send("increment")
    } catch (error) {
        res.status(400).send(error);
    }
    
}