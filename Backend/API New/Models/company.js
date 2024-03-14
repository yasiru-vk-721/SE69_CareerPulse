const mongoose = require ('mongoose')

const companySchema = new mongoose.Schema({
    companyName: String,
    email: String,
    password: String,
    
})

const companyModel = mongoose.model( 'Company', companySchema )
module.exports = companyModel; 