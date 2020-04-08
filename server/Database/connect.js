const Sequelize = require('sequelize');

const db = new Sequelize('musicme', 'postgres', 'raza9187', {
    host: 'localhost',
    dialect: 'postgres'
});


module.exports = db;
