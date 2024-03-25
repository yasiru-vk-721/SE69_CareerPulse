const mongoose = require('mongoose');
const {Schema} = mongoose;

const applicationDetailsSchema = new Schema({
    // companyEmail: String,
    email: String,
    fullName: String,
    jobRole: String,
    skills: String,
    gender: String,
    nationality: String,
    institution: String,
    studyFields: String,
    jobStatus: {
        type: String,
        default: 'pending'
    }
});

const ApplicationModle = mongoose.model('Applications', applicationDetailsSchema);

module.exports = ApplicationModle;
