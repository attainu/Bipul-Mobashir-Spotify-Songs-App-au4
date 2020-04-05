const favourite = require('../Models/FavouritesModel');

//Add a favourite
exports.create = async (req, res) => {
    try {
        let favourites = await favourite.create({
            isFavourite: true,
            trackId: req.body.trackId,
            trackName: req.body.trackName,
            artistName:req.body.artistName,
            albumName: req.body.albumName,
            albumReleaseDate: req.body.albumReleaseDate,
            duration: req.body.duration,
            userId: req.body.userId
        })
        res.status(200).send(favourites);  
    } catch (error) {
        res.status(400).send(error);
    }
}

//Fetch all favourites
exports.findAll = async (req, res) => {
    console.log(req.params.userId);
    try {
        let favourites = await favourite.findAll({
            where: {
                isFavourite: true,
                userId: req.params.userId
            }
        })
        res.status(200).send(favourites);  
    } catch (error) {
        res.status(400).send(error);
    }
}

// Delete a favourite by  trackId
exports.delete = async (req, res) => {
    try {
        const id = req.params.trackId;
         let favourites = await favourite.destroy({
            where: {
                trackId: id
            }
        })
        res.status(200).send(favourites);  
        
    } catch (error) {
        res.status(400).send(error);
    }
}