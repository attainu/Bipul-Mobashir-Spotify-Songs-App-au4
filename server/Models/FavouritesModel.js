const db = require('../Database/connect');
const Sequelize = require('sequelize');

let favourite = db.define("favourites",{

    userid: {
        type: Sequelize.INTEGER
    },
    imgurl: {
      type: Sequelize.TEXT,
      alowNull: false
    },
    trackid : {
      type: Sequelize.STRING,
      alowNull: false
    },
    trackname: {
      type: Sequelize.STRING,
      alowNull: false
    },
    
  }, {
    timestamps: false
  });
  db.sync().then(res=>{
    console.log('favourites db has been created');
});

module.exports = favourite;