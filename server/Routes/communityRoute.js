const express = require('express');
const router = express.Router();

const communities = require('../Controllers/CommunityController');
const verify = require('../verifyToken/verifyToken');

//Add a communities
router.post('/communities',verify, communities.create);

//Get all communities
router.get('/getAllCommunities',verify, communities.findAll);

//Update communities
router.put('/communities/:id', verify, communities.update)

//Remove communities
router.delete('/communities/:id',verify, communities.delete);

module.exports = router;
