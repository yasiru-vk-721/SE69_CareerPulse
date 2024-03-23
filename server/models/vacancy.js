const mongoose = require('mongoose');
// const User = require ('./user');
// const Company =require('./company');
const {Schema} = mongoose;

const vacancySchema = new Schema({


    companyName: String,

    jobType: String,
    jobRole: String,
    location: String,
    // email:{
    //     type: String,
    //     unique: true
    // },
    skills: String
    // confirmpassword: String,
    // jobStatus: String



});

const VacancyModle = mongoose.model('Vacancies', vacancySchema);

module.exports = VacancyModle;