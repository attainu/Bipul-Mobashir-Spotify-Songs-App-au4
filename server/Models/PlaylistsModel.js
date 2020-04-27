const db = require('../Database/connect');
const Sequelize = require('sequelize');

let playlist = db.define("playlists",{

    userid: {
        type: Sequelize.INTEGER
    },
    playlistname: {
        type: Sequelize.STRING
    },
   
}, {
    timestamps: false
  });
  db.sync().then(res=>{
    console.log('playlists db has been created');
});

module.exports = playlist;