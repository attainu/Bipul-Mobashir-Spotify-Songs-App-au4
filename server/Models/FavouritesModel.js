const db = require('../Database/connect');
const Sequelize = require('sequelize');

let favourite = db.define("favourites",{
    // id: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    //   primaryKey: true,
    //   autoIncrement : true
    // },
    userId: {
        type: Sequelize.STRING
    },
    isFavourite : {
      type: Sequelize.BOOLEAN,
      allowNull : false,
      defaultValue: false
    },
    trackId : {
      type: Sequelize.STRING
    },
    trackName: {
      type: Sequelize.STRING
     },
    artistName: {
      type: Sequelize.STRING
    },
    albumName: {
      type: Sequelize.STRING
    },
    albumReleaseDate: {
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