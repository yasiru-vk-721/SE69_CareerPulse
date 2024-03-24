const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    firstName: {
        type:String,
    },
    lastName: {
        type:String,
    },
    email:{
        type: String,
        unique: true
    },
    password: {
        type:String,
    },
    confirmpassword: {
        type:String,
    },
    jobStatus: {
        type:String,
    }
});

const UserModle = mongoose.model('Users', userSchema);

module.exports = UserModle;