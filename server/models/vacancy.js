const mongoose = require('mongoose');
const {Schema} = mongoose;

const vacancySchema = new Schema({


    companyName: String,
    companyEmail: String,
    jobRole: String,
    jobType: String,
    requirements: String,


});

const VacancyModle = mongoose.model('Vacancies', vacancySchema);

module.exports = VacancyModle;