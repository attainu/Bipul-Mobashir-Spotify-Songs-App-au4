const express = require('express');
const router = express.Router();
const verify = require('../verifyToken/verifyToken');

router.get('/status',verify,(req, res)=>{
    res.json({
        status: 200,
        message: "success"
    })
})


module.exports = router;