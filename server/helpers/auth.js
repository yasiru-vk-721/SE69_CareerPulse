const bcrypt = require('bcrypt');

const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(12,(err, salt) => {
            if(err){
                reject(err)
            }
            bcrypt.hash(password, salt, (err, hash) => {
                if(err){
                    reject(err);
                }
                resolve(hash);
            })
        })
    })
}

const hashConfirmpassword = (confirmpassword) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(12,(err, salt) => {
            if(err){
                reject(err)
            }
            bcrypt.hash(confirmpassword, salt, (err, hash) => {
                if(err){
                    reject(err);
                }
                resolve(hash);
            })
        })
    })
}

const comparePassword = (password, hashed) => {
    return bcrypt.compare(password, hashed)
}
const compareCompanyPassword = (companyPassword, hashed) => {
    return bcrypt.compare(companyPassword, hashed)
}

//hased companyPassword
const hashCompanyPassword = (companyPassword) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(12,(err, salt) => {
            if(err){
                reject(err)
            }
            bcrypt.hash(companyPassword, salt, (err, hash) => {
                if(err){
                    reject(err);
                }
                resolve(hash);
            })
        })
    })
}

//hased companyConfirmPassword
const hashCompanyConfirmPassword = (companyConfirmPassword) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(12,(err, salt) => {
            if(err){
                reject(err);
            }
            bcrypt.hash(companyConfirmPassword, salt, (err, hash) => {
                if(err){
                    reject(err);
                }
                resolve(hash);
            })
        })
    })
}

module.exports = {
    hashPassword,
    comparePassword,
    hashConfirmpassword,
    hashCompanyPassword,
    hashCompanyConfirmPassword,
    compareCompanyPassword
}