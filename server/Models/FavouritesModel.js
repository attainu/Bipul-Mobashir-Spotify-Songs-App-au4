const db = require('../Database/connect');
const Sequelize = require('sequelize');

let favourite = db.define("favourites",{

    userid: {
        type: Sequelize.INTEGER
    },
    isfavourite : {
      type: Sequelize.BOOLEAN,
      allowNull : false,
      defaultValue: false
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
    console.log('favourites db has been created');
});

module.exports = favourite;