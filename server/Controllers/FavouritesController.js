const favourite = require('../Models/FavouritesModel');

//Add a favourite
exports.create = async (req, res) => {
    console.log(req.user,"jddjdj")
    try {
        let favourites = await favourite.create({
            userid: req.user.id,
            imgurl: req.body.imgurl,
            trackid: req.body.trackid,
            trackname: req.body.trackname,            
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
    console.log(req.params.trackid);
    try {
        
        const id = req.params.trackid;
         let favourites = await favourite.destroy({
            where: {
                trackid: id,
                userid: req.user.id
            }
        })
        res.status(200).json({
            status: 200,
            message: "Success"
        });  
        
    } catch (error) {
        res.status(400).send(error);
    }
}