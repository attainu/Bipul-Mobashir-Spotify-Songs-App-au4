const playlist = require('../Models/PlaylistsModel');

//Create playlist
exports.create = async (req, res) => {
    console.log(req.user);
    try {
        let playlists = await playlist.create({
            playlistname: req.body.playlistname,
            description: req.body.description,
            // playlistid: req.body.playlistid,
            userid: req.user.id
        })
        res.status(200).send(playlists);  
    } catch (error) {
        res.status(400).send(error);
    }
}

//Fetch All playlists
exports.findAll = async (req, res) => {
    console.log(req.user.id);
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
    console.log(req.user.id)
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
       res.status(200).send(playlists);  
    } catch (error) {
        res.status(400).send(error);
    }
}