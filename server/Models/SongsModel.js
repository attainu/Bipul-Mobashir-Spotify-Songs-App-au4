const db = require('../Database/connect');
const Sequelize = require('sequelize');

let song = db.define("songs",{

    userid: {
        type: Sequelize.INTEGER
    },
   
    playlistid: {
        type: Sequelize.INTEGER
    },
    trackid : {
      type: Sequelize.INTEGER
    },
    trackname: {
      type: Sequelize.STRING
     },
    artistname: {
      type: Sequelize.STRING
    },
    albumname: {
      type: Sequelize.STRING
    },
    albumreleasedate: {
      type: Sequelize.STRING
    },
    duration: {
      type: Sequelize.STRING
    }
  }, {
    timestamps: false
  });
  db.sync().then(res=>{
    console.log('songs db has been created');
});

module.exports = song;