const mongoose = require ('mongoose')

const employeeSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    jobStatus: String
})

const employeeModel = mongoose.model( 'Employees', employeeSchema )
module.exports = employeeModel; 