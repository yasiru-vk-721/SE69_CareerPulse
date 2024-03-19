const mongoose = require('mongoose');
const {Schema} = mongoose;

const companySchema = new Schema({
    companyName: String,
    companyEmail:{
        type: String,
        unique: true
    },
    companyPassword: String,
    companyConfirmPassword: String,
    companyLocation: String
});

const CompanyModel = mongoose.model('Companies', companySchema);

module.exports = CompanyModel;