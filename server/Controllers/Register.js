const User = require('../Models/User');
const bcrypt = require('bcryptjs');
const {registerValidation} = require('../validation');

exports.register = async (req, res) => {
    
    try {
        //Validate the data before create
        const {error} = registerValidation(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        //Checking if the user is already in database
        const emailExist = await User.findOne({where: {email: req.body.email}});
        if(emailExist) return res.status(400).send('Email already exists!');

        //Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //Create a new user
        const {body} = req;
        let user = await User.create({name: body.name, email: body.email, password: hashedPassword});
        res.send(user);
    } catch (error) {
        console.log(error);
    }
};
