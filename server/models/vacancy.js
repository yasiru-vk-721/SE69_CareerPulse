const mongoose = require('mongoose');
// const User = require ('./user');
// const Company =require('./company');
const {Schema} = mongoose;

const vacancySchema = new Schema({
    companyName: String,
    jobType: String,
    jobRole: String,
    location: String,
    skills: String,
    companyEmail: String,
    jobRole: String,
    skills: String,
});

const VacancyModle = mongoose.model('Vacancies', vacancySchema);

module.exports = VacancyModle;