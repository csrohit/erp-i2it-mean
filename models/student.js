const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
     roll_no:{
        type:Number,
         required:true
     },
     department:{
        type:mongoose.Schema.Types.ObjectId,
         ref:'Department'
     },
     batch:{
        type:mongoose.Schema.Types.ObjectId,
         ref:'Batch'
     }
 });
 const Student = module.exports = mongoose.model('Student',studentSchema);
 module.exports.createStudent = newStudent=>{
    return new Promise((resolve,reject)=>{
        newStudent.save((err,newStudent)=>{
            if (!err)return resolve(newStudent);
            else return reject("Error creating student "+err);
        })
    })
}