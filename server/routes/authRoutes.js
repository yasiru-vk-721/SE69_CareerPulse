const express = require('express');
const router = express.Router();
const cors = require('cors');

const {test, registerUser, loginUser, getProfile, registerCompany, postJob,logOut,companyLogin, getCompanyProfile}  = require('../controllers/authController.js'); //importing the test function from the authController




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
router.post('/company-login',companyLogin)

module.exports = router;
