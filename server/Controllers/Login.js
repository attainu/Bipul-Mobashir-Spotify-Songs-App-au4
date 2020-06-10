const User = require('../Models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {loginValidation} = require('../validation');

exports.login = async (req, res) => {
    
    try {
        //Validate the data
        const {error} = loginValidation(req.body);
        if(error) return res.json({
            status: 400,
            message: error.details[0].message
        });

        //Checking if the user exist or not in database
        const user = await User.findOne({where: {email: req.body.email}});
        if(!user) return res.json({
            status: 400,
            message: "Email is not found"
        });

        //PASSWORD IS CORRECT OR NOT
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if(!validPassword) return res.json({
            status: 400,
            message: "Invalid Password"
        });

        //CREATE and assign a token
        const token = jwt.sign({id: user.id}, process.env.TOKEN_SECRET);
        res.header('auth-token', token).json({
            status: 200,
            message: "success",
            name: user.name
        }) 

        // res.send("Logged In");

    } catch (error) {
        console.log(error);
    }
};
