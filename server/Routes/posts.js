const express = require('express');
const router = express.Router();
const verify = require('../verifyToken/verifyToken');

router.get('/posts',verify,(req, res)=>{
    res.json({
        posts: {
            title: "hello world",
            description: "world is beautiful"
        }
    })
})


module.exports = router;