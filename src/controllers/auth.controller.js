const userModel = require('../models/user.model.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


/** 
* -  user register controller
*  - POST /api/auth/register
**/
const userRegisterController = async (req, res) => {
    const { email, password, userName } = req.body;

    const isExist = await userModel.findOne({ email: email });
    if (isExist) {
        return res.status(422).json({ message: "with this email user already register", status: 'failed' })
    }

    const user = await userModel.create({ email, password, userName });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '3d' });
    res.cookie('token', token);
    res.status(201).json({
        message: 'User Created Successfully',
        user: {
            _id: user._id,
            email: user.email,
            userName: user.userName
        },
        token
    })
}


/** 
* -  user login controller
*  - POST /api/auth/login
**/
const userLoginController = async (req, res) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select('+password');
    if (!user) {
        return res.status(401).json({ message: "email or password is invalid" });
    }

    const isValidPassword = await user.comparePassword(password);

    if (!isValidPassword) {
        return res.status(401).json({ message: "email or password is invalid" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '3d' });

    res.cookie('token', token);

    return res.status(200).json({
        message: 'User Login Successfully', user: {
            _id: user._id,
            email: user.email,
            userName: user.userName
        },
        token
    });




}




module.exports = {
    userRegisterController,
    userLoginController
}