const playlist = require('../Models/PlaylistsModel');

//Create playlist
exports.create = async (req, res) => {
    try {
        let playlists = await playlist.create({
            playlistname: req.body.playlistname,
            userid: req.user.id
        })
        res.status(200).send(playlists);  
    } catch (error) {
        res.status(400).send(error);
    }
}

//Fetch All playlists
exports.findAll = async (req, res) => {
    try {
        let playlists = await playlist.findAll({
            where: {
                userid: req.user.id
            }
        })
        res.status(200).send(playlists);  
    } catch (error) {
        res.status(400).send(error);
    }
}

//Update a playlist 
exports.update = async (req, res) => {
    try {
        let playlists = await playlist.update({
             playlistname : req.body.playlistname,
             description : req.body.description
        },{
            where: {
                userid: req.user.id,
                id: req.params.id
            }
            
        })
        res.status(200).send("updated");
    } catch (error) {
        res.status(400).send(error);
    }
}

//Delete a playlist
exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        let playlists = await playlist.destroy({
           where: {
               id: id,
               userid: req.user.id
           }
       })
       res.status(200).json({
           status: 200,
           message: "success"
       });  
    } catch (error) {
        res.status(400).send(error);
    }
}