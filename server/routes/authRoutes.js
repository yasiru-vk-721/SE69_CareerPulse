const express = require('express');
const router = express.Router();
const cors = require('cors');
<<<<<<< HEAD

const {test, registerUser, loginUser, getProfile, registerCompany, postJob,logOut,companyLogin, getCompanyProfile, getAllUsers}  = require('../controllers/authController.js'); //importing the test function from the authController
=======
const { testMail } = require('../controllers/authMailController.js'); //importing the testMail function from the authMailController
const {test, registerUser, loginUser, getProfile, registerCompany, postJob,logOut,companyLogin, getCompanyProfile}  = require('../controllers/authController.js'); //importing the test function from the authController
>>>>>>> 8dd759185b6ac4740e9f5815fa22e923cbdecb65

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
<<<<<<< HEAD
router.post('/company-login',companyLogin),
router.get('/users', getAllUsers)
=======
router.post('/company-login',companyLogin)
router.post('/testMail', testMail)
>>>>>>> 8dd759185b6ac4740e9f5815fa22e923cbdecb65

module.exports = router;
