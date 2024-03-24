const mongoose = require('mongoose');
const {Schema} = mongoose;

const companySchema = new Schema({
    companyName:{
        type:String,
    },
    companyEmail:{
        type: String,
        unique: true
    },
    companyPassword:{
        type:String,
    },
    companyConfirmPassword: {
        type:String,
    },
    companyLocation: {
        type:String,
    }
});

const CompanyModel = mongoose.model('Companies', companySchema);

module.exports = CompanyModel;