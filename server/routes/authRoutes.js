const express = require('express');
const router = express.Router();
const cors = require('cors');


const {test, registerUser, loginUser, getProfile, registerCompany, postJob,logOut,companyLogin, getCompanyProfile, getAllUsers, getVacancy, deleteVacancy, getPostedVacancy, postApplication}  = require('../controllers/authController.js'); //importing the test function from the authController

const { testMail } = require('../controllers/authMailController.js'); //importing the testMail function from the authMailController



//middlware to use cors
router.use(
    cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));

router.get('/', test)
router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/profile',getProfile)
router.post('/company-register',registerCompany)
router.get('/company-profile', getCompanyProfile)
router.post('/posting', postJob)
router.get('/logout',logOut)
router.post('/company-login',companyLogin),
router.get('/users', getAllUsers)
router.get('/vacancy', getVacancy)
router.delete('/vacancy/:id', deleteVacancy)
router.post('/testMail', testMail)
router.get('/posted-vacancies/:email', getPostedVacancy); 
router.post('/applicationPosting', postApplication),
router.get('/posted-applications/:email', getPostedVacancy); 



module.exports = router;
