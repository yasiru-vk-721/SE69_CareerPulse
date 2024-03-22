const mongoose = require('mongoose');
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