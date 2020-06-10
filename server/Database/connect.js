const Sequelize = require('sequelize');

// const db = new Sequelize('musicme', 'postgres', 'raza9187', {
//     host: 'localhost',
//     dialect: 'postgres'
// });

const db = new Sequelize("postgres://tuykahwehygbor:b6272cbb7b17968138267a78c5e7ca368edddb0d202864f49c30f116c5f647d4@ec2-54-236-169-55.compute-1.amazonaws.com:5432/d532bogd8thi2h", {
  dialect: 'postgres',
  // protocol: 'postgres',
  ssl: true,
})


module.exports = db;
