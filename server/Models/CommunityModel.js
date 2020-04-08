const db = require('../Database/connect');
const Sequelize = require('sequelize');

let community = db.define("communities",{

    userid: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
    },
    communityname: {
        type: Sequelize.STRING
    }
   
}, {
    timestamps: false
  });
  db.sync().then(res=>{
    console.log('communities db has been created');
});

module.exports = community;