const express = require('express');
const router = express.Router();
const cors = require('cors');
const {test, registerUser, loginUser, getProfile, registerCompany, jobPost}  = require('../controllers/authController.js'); //importing the test function from the authController

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
router.post('/posting', postJob)

module.exports = router;
