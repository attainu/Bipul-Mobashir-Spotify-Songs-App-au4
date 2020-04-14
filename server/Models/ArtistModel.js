const db = require('./../Database/connect');
const Sequelize = require('sequelize');

let Artist = db.define('artists', {
    artistname: {
        type: Sequelize.STRING,
        alowNull: false
    },
    imgurl: {
        type: Sequelize.TEXT,
        alowNull: false
    },
    popularity: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    }
}, {
    timestamps: false
});
db.sync().then(res=>{
    console.log('artists db has been created');
});

module.exports = Artist;