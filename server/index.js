const app = require('./app');
const db = require('./Database/connect');
const PORT = process.env.PORT || 5555;

db.authenticate().then(()=>{
    try {
        console.log("Database connection is ready..");
        app.listen(PORT, ()=>{
            console.log(`server is running on PORT: `,PORT);
        });   
    } catch (error) {
        console.log(error);
    }
});