const mongoose = require('mongoose'),
    Designation = require('./designation'),
    bcrypt = require('bcryptjs'),
    logger = require('../config/logger');


const userSchema = mongoose.Schema({
    name: { type: String, required: true},
    userName: { type: String, unique: true, index: true, required: true},
    password: { type: String, required: true },
    designation:{ type:mongoose.Schema.Types.ObjectId, ref:'Designation', required: true},
    profile:{ type: mongoose.Schema.Types.ObjectId}
});

userSchema.pre('save', async function(next) {
    //* Arrow function binds `this` object to owner of the function while
    //* normal function binds `this` object to the calling object
    try{
        let salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    }catch(e){ next(e); }
    
})

userSchema.methods.getDesignation = function() {
    return new Promise((resolve, reject) => {
        Designation.findById(this.designation, (err, designation) =>{
            if(err) return reject(err);
            else return resolve(designation);
        })
    })
}


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
    const User = module.exports = mongoose.model('User', userSchema)

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

module.exports.createUser = newUser => {
    return new Promise((resolve, reject)=>{
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) return reject(err)
                newUser.password = hash;

                //TODO delete student profile if user creation fails
                newUser.save((err, user)=>{
                    if(err) return reject(err);
                    else return resolve(user);
                })
            })
        })
    })
};
