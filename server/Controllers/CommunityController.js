const community = require('../Models/CommunityModel');

//Create community
exports.create = async (req, res) => {
    console.log(req.user.id);
    try {
        let communites = await community.create({
            communityname: req.body.communityname,
            userid: [req.user.id]
        })
        res.status(200).send(communites);  
    } catch (error) {
        res.status(400).send(error);
    }
}

//Fetch All community
exports.findAll = async (req, res) => {
    console.log(req.user.id);
    try {
        let communites = await community.findAll({
            where: {
                userid: [req.user.id]
            }
        })
        res.status(200).send(communites);  
    } catch (error) {
        res.status(400).send(error);
    }
}

//Update a community 
exports.update = async (req, res) => {
    console.log(req.user.id)
    try {
        let communites = await community.update({
                communityname: req.body.communityname
        },{
            where: {
                userid: [req.user.id],
                id: req.params.id
            }
            
        })
        res.status(200).send("updated");
    } catch (error) {
        res.status(400).send(error);
    }
}

//Delete a community
exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        let communites = await community.destroy({
           where: {
               id: id,
               userid: [req.user.id]
           }
       })
       res.status(200).send("deleted");  
    } catch (error) {
        res.status(400).send(error);
    }
}