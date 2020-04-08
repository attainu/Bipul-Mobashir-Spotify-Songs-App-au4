const song = require('../Models/SongsModel');

//Add a song
exports.create = async (req, res) => {
    console.log(req.user,"jddjdj")
    try {
        let songs = await song.create({
           
            trackid: req.body.trackid,
            playlistid: req.body.playlistid,
            trackname: req.body.trackname,
            artistname:req.body.artistname,
            albumname: req.body.albumname,
            albumreleasedate: req.body.albumreleasedate,
            duration: req.body.duration,
            userid: req.user.id
        })
        res.status(200).send(songs);  
    } catch (error) {
        res.status(400).send(error);
    }
}

//Fetch all songs for a particular user's playlist
exports.findAll = async (req, res) => {
    try {
        let songs = await song.findAll({
            where: {
                userid: req.user.id,
                playlistid: req.params.playlistid
            }
        })
        res.status(200).send(songs);  
    } catch (error) {
        res.status(400).send(error);
    }
}

// Delete a song from playlist for a particular user's playlist
exports.delete = async (req, res) => {
    console.log("delete >>>",req.user.id);
    console.log(req.params.userid);
    try {
        const id = req.params.trackid;
         let songs = await song.destroy({
            where: {
                trackid: id,
                userid: req.user.id,
                playlistid: req.params.playlistid
            }
        })
        res.status(200).send(songs);  
        
    } catch (error) {
        res.status(400).send(error);
    }
}