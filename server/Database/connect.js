const Sequelize = require('sequelize');

const db = new Sequelize('musicme', 'postgres', 'raza9187', {
    host: 'localhost',
    dialect: 'postgres'
});

// const db = new Sequelize("postgres://cirgmhqdcjsrjb:098c3859f1a60b9a8c7d0d9d6dd89767ac11eb4f3b9b0e85dc3bbc9383bf5aea@ec2-52-202-146-43.compute-1.amazonaws.com:5432/d4in4qia4vtmqc", {
//   dialect: 'postgres',
//   // protocol: 'postgres',
//   ssl: true,
// })


module.exports = db;
