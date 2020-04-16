const mongoose = require('mongoose'),
    Designation = require('./designation'),
    bcrypt = require('bcryptjs');


const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    designation:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Designation',
        required:true
    },
})

userSchema.methods.getDesignation = function() {
    return new Promise((resolve, reject) => {
        Designation.findById(this.designation, (err, designation) =>{
            if(err) return reject(err);
            else return resolve(designation);
        })
    })
}

const User = module.exports = mongoose.model('User', userSchema)

module.exports.findByUsername = username => {
    return new Promise((resolve, reject) => {
        return User.findOne({
            username
        }, (err, user) => {
            if (err || !user) {
                console.log(err);
                return reject("user not found")
            } else {
                return resolve(user);
            }
        });
    })
}

module.exports.comparePassword = (password, hash) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, (err, isMatch) => {
            if (err) {
                console.log(err);
                return reject("Invalid password");
            } else {
                return resolve(isMatch);
            }
        })
    })
}

module.exports.addUser = (newUser, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err
            newUser.password = hash;
            newUser.save(callback)
        })
    })
}