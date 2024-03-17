const User = require('../models/user.js');
const { hashPassword, hashedconfirmpassword,  comparePassword } = require('../helpers/auth.js');
const jwt = require('jsonwebtoken');

const test = (req, res) => {
    res.json('Test is Working');
};

// register user
const registerUser = async (req, res) => {
    try{
        const {firstName, lastName, email, password, confirmpassword, jobStatus} = req.body;
        // check is name was entered
        if(!firstName){
            return res.json({
                error: "First Name is required"
            })
        };
        // check if last name was entered
        if(!lastName){
            return res.json({
                error: "Last Name is required"
            })
        };
        // check if email was entered
        const exist = await User.findOne({email});
        if(exist){
            return res.json({
                error: "Email already exists"
            })
        };
        // check if password was entered
        if(!password || password.length < 8){
            return res.json({
                error: "Password is required and must be at least 8 characters long"
            })
        };
        // const passexits = await User.findOne({password});
        // if(passexits){
        //     return res.json({
        //         error: "Password already exists"
        //     })
        // };
        // check if confirm password was entered
        if(!confirmpassword || confirmpassword !== password){
            return res.json({
                error: "Confirm Password is required"
            })
        };
        // check if job status was entered
        if(!jobStatus){
            return res.json({
                error: "Job Status is required"
            })
        };

        // hash password
        const hashedPassword = await hashPassword(password);
        // hash confirm password
        const hashedconfirmpassword = await hashPassword(confirmpassword);

        // create user
        const user = await User.create({
            firstName,
            lastName,
            email,
            password : hashedPassword,
            confirmpassword : hashedconfirmpassword,
            jobStatus
        });

        return res.json(user)

    }catch (error){
        console.log(error);
    }
};

//login user
const loginUser = async (req,res)=> {
    try{
        const {email, password} = req.body;

        //check if user exits
        const user = await User.findOne({email});
        if(!user){
            return res.json({
                error: "No User Found"
            })
        }

        //check password
        const isMatch = await comparePassword(password, user.password);
        if(isMatch){
            jwt.sign({email: user.email, id: user._id, firstName:user.firstName, lastName:user}, process.env.JWT_SECRET, {}, (err, token) => {
                if(err) throw err;
                res.cookie('token', token).json(user)
            });
        }
        if(!isMatch){
            return res.json({
                error: "Password Do not match"
            })
        }

    }catch(error){
        console.log(error);
    }

}

const getProfile = async (req, res) => {
    const {token} = req.cookies;
    if(token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if(err) throw err;
            res.json(user);
        });
    }else {
         res.json(null)
    }

};

module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile
}