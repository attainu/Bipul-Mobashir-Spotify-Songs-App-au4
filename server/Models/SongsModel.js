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
      type: Sequelize.STRING
    },
    trackname: {
      type: Sequelize.STRING
     },
    imgurl: {
      type: Sequelize.TEXT,
      alowNull: false
    }
    
  }, {
    timestamps: false
  });
  db.sync().then(res=>{
    console.log('songs db has been created');
});

module.exports = song;