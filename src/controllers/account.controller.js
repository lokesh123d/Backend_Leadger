const accountModel = require('../models/account.model.js');


const  createAccountController =  async (req,res)=>{
    const user = req.user;

    const account = await accountModel.create({
        user:user._id,
    })
    res.status(201).json({
        account,
        message:'account created successfully'
    })
}

module.exports ={
    createAccountController
}