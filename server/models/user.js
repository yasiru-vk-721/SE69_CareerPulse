const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email:{
        type: String,
        unique: true
    },
    password: String,
    confirmpassword: String,
    jobStatus: String
});

const UserModle = mongoose.model('Users', userSchema);

module.exports = UserModle;