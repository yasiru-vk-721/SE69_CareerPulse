const User = require('../models/user.js');
const Company = require('../models/company.js');
const { hashPassword, hashConfirmpassword,  comparePassword,hashCompanyPassword,
    hashComapnyConfirmPassword,compareCompanyPassword } = require('../helpers/auth.js');
const Vacancy = require('../models/vacancy.js');
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
        const hashedconfirmpassword = await hashConfirmpassword(confirmpassword);

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
// post job
const postJob = async (req, res) => {
    try{
        const {companyName, jobRole, skills} = req.body;
        // check is name was entered
        if(!companyName){
            return res.json({
                error: "Company Name is required"
            })
        };
        // check if job role was entered
        if(!jobRole){
            return res.json({
                error: "Job Role is required"
            })
        }
        if(!skills){
            return res.json({
                error: "Skills are required"
            })
        }
        // create vacancy
        const vacancy = await Vacancy.create({
            companyName,
            jobRole,
            skills
        });

        const isMatch = await compareCompanyPassword(password, vacancy.password);
        if(isMatch){
            jwt.sign({ vacancy: vacancy.companyName, vacancy: vacancy.jobRole, vacancy: vacancy.skills}, process.env.JWT_SECRET, {}, (err, token) => {
                if(err) throw err;
                res.cookie('token', token).json(vacancy)
            });
        }
        if(!isMatch){
            return res.json({
                error: "Password Do not match"
            })
        }

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
                error: "No User Found Please Enter Your Email"
            })
        }else if(!password){
            return res.json({
                error: "Enter Your Password"
            })
        }



        // Assuming you're inside an async function
        

        //check password
        const isMatch = await comparePassword(password, user.password);
        if(isMatch){
            jwt.sign({email: user.email, id: user._id, firstName:user.firstName, lastName:user.lastName}, process.env.JWT_SECRET, {}, (err, token) => {
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

//logout user
const logOut = async (req,res) =>{
    try{
        res.clearCookie('token');
        res.json("Logged Out")
    }catch(error){
        console.log(error);
        res.json('Error Logging out')
    }
}

const getAllUsers = async (req, res) => {
    try {
        const vacancy = await Vacancy.find();
        res.json(vacancy);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getAllUsers,
};

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


const getCompanyProfile = async (req, res) => {
    const {token} = req.cookies;
    if(token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, company) => {
            if(err) throw err;
            res.json(company);
        });
    }else {
         res.json(null)
    }

};

const getVacancy = async (req, res) => {
    // const {token} = req.cookies;
    // if(token){
    //     jwt.verify(token, process.env.JWT_SECRET, {}, (err, vacancy) => {
    //         if(err) throw err;
    //         res.json(vacancy);
    //     });
    // }
    try{
        const vacancy = await Vacancy.find();
        res.json({vacancy});
    }catch (error){
        console.log(error);
        res.status(500).json({error: "Internal server error"})
    }



};


=======
// post job
const postJob = async (req, res) => {
    try{
        const {companyName, companyEmail, jobRole, skills} = req.body;
        // check is name was entered
        if(!companyName){
            return res.json({
                error: "Company Name is required"
            })
        };
        // check is name was entered
        if(!companyEmail){
            return res.json({
                error: "company email is required"
            })
        };
        // check if job role was entered
        if(!jobRole){
            return res.json({
                error: "Job Role is required"
            })
        }
        if(!skills){
            return res.json({
                error: "Skills are required"
            })
        }
        // create vacancy
        const vacancy = await Vacancy.create({
            companyName,
            companyEmail,
            jobRole,
            skills
        });





//register company
const registerCompany = async (req, res) => {
    try{
        const {companyName, companyEmail, companyPassword, companyConfirmPassword, companyLocation} = req.body;
        // check is name was entered
        if(!companyName){
            return res.json({
                error: "Company Name is required"
            })
        };
        // check if email was entered
        const exist = await Company.findOne({companyEmail});
        if(exist){
            return res.json({
                error: "Email already exists"
            })
        };
        // check if companyPassword was entered
        if(!companyPassword || companyPassword.length < 8){
            return res.json({
                error: "Password is required and must be at least 8 characters long"
            })
        };
        // check if confirm companyPassword was entered
        if(!companyConfirmPassword || companyConfirmPassword !== companyPassword){
            return res.json({
                error: "Confirm Password is required"
            })
        };
        // check if location  was entered
        if(!companyLocation){
            return res.json({
                error: "Location is required"
            })
        };

        // hash companyPassword
        const hashedCompanyPassword = await hashCompanyPassword(companyPassword);
        // hash confirm password
        const hashedComapnyconfirmPassword = await hashCompanyPassword(companyConfirmPassword);

        // create companyRegister
        const company = await Company.create({
            companyName,
            companyEmail,
            companyPassword : hashedCompanyPassword,
            companyConfirmPassword : hashedComapnyconfirmPassword,
            companyLocation
        });

        return res.json(company)

    }catch (error){
        console.log(error);
    }
};


//comaapny login
const companyLogin = async (req,res)=> {
    try{
        const {companyEmail, companyPassword} = req.body;

        //check if user exits
        const company = await Company.findOne({companyEmail});
        if(!company){
            return res.json({
                error: "No Company Found"
            })
        }

        //check password
        const isMatch = await compareCompanyPassword(companyPassword, company.companyPassword);
        if(isMatch){
            jwt.sign({companyEmail: company.companyEmail, id: company._id, companyName:company.companyName, companyLocation:company.companyLocation}, process.env.JWT_SECRET, {}, (err, token) => {
                if(err) throw err;
                res.cookie('token', token).json(company)
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


module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile,
    registerCompany,
    postJob,
    registerCompany,
    logOut,
    companyLogin, 
    getCompanyProfile,
<<<<<<< HEAD
    getAllUsers
=======
    getVacancy

>>>>>>> 8dd759185b6ac4740e9f5815fa22e923cbdecb65
}

