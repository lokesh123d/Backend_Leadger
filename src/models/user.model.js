const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is Required To Creating a User"],
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Enter a Valid Email'],
        unique: [true, 'Email Already Exist']
    },
    userName: {
        type: String,
        required: [true, 'Name is Required For Creating a Account'],
    },
    password: {
        type: String,
        required: [true, 'Password is Reequied For Creating an Account'],
        minlength: [6, 'Password Should be Contain more than 6 chracter'],
        select: false
    }
}, { timestamps: true });


userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return 
    }
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    return 
})


userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}


const userModel = mongoose.model('user', userSchema);

module.exports = userModel