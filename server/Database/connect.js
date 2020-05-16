const Sequelize = require('sequelize');

// const db = new Sequelize('musicme', 'postgres', 'raza9187', {
//     host: 'localhost',
//     dialect: 'postgres'
// });

const db = new Sequelize("postgres://uxaecojfkugvlk:9efb47aa86113ec9155b451f501e2c43d0fdbecd44aa582cc0a7dce9ddac7ffc@ec2-54-86-170-8.compute-1.amazonaws.com:5432/d5pf1mkmgpp7r0", {
  dialect: 'postgres',
  // protocol: 'postgres',
  ssl: true,
})


module.exports = db;
