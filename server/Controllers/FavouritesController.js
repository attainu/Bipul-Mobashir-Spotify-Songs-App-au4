const favourite = require('../Models/FavouritesModel');

//Add a favourite
exports.create = async (req, res) => {
    console.log(req.user,"jddjdj")
    try {
        let favourites = await favourite.create({
            isfavourite: true,
            trackid: req.body.trackid,
            trackname: req.body.trackname,
            artistname:req.body.artistname,
            albumname: req.body.albumname,
            albumreleasedate: req.body.albumreleasedate,
            duration: req.body.duration,
            userid: req.user.id
        })
        res.status(200).send(favourites);  
    } catch (error) {
        res.status(400).send(error);
    }
}

//Fetch all favourites
exports.findAll = async (req, res) => {
    console.log("req.user>>",req.user.id)
    console.log(req.params.userid);
    try {
        let favourites = await favourite.findAll({
            where: {
                isfavourite: true,
                userid: req.user.id
            }
        })
        res.status(200).send(favourites);  
    } catch (error) {
        res.status(400).send(error);
    }
}

// Delete a favourite by  trackId
exports.delete = async (req, res) => {
    console.log("delete >>>",req.user.id);
    console.log(req.params.userid);
    try {
        const id = req.params.trackid;
         let favourites = await favourite.destroy({
            where: {
                trackid: id,
                userid: req.user.id
            }
        })
        res.status(200).send(favourites);  
        
    } catch (error) {
        res.status(400).send(error);
    }
}