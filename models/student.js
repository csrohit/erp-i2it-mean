const {Schema, model} = require('mongoose');
const {ObjectId} = Schema.Types;


const studentSchema = new Schema({
    email: { type: String, required:true },
    roll_no: { type:Number, required:true },
    department: { type: ObjectId, ref:'Department' },
    batch: { type: ObjectId, ref:'Batch' },
    userData: { type: ObjectId, ref: 'User'}
 });
 const Student = module.exports = model('Student',studentSchema);
 
 module.exports.createStudent = newStudent=>{
    return new Promise((resolve,reject)=>{
        newStudent.save((err,newStudent)=>{
            if (!err)return resolve(newStudent);
            else return reject("Error creating student "+err);
        })
    })
}