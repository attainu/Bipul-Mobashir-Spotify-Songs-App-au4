const User = require('../Models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {registerValidation} = require('../validation');

exports.register = async (req, res) => {
    try {
        //Validate the data before create
        const {error} = registerValidation(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        //Checking if the user is already in database
        const emailExist = await User.findOne({where: {email: req.body.email}});
        if(emailExist) return res.json({
            status: 400,
            message: 'Email already exists!'
        })

        //Checking if the username is already taken or not
        const usernameExist = await User.findOne({where: {username: req.body.username}});
        if(usernameExist) return res.json({
            status: 400,
            message: 'Username already taken!'
        })

        //Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //Create a new user
        const {body} = req;
        let user = await User.create({name: body.name, username: body.username, email: body.email, password: hashedPassword});
        //CREATE and assign a token
        const token = jwt.sign({id: user.id}, process.env.TOKEN_SECRET);
        res.header('auth-token', token).json({
            status: 200,
            message: "success",
            name: user.name
        })        
    } catch (error) {
        console.log(error);
    }
};
