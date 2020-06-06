const {Schema, model} = require('mongoose');
const {ObjectId} = Schema.Types;


const studentSchema = new Schema({
    email: { type: String, required:true },
    rollNo:{ type:Number, required:true },
    department:{ type: ObjectId, ref:'Department' },
    batch:{ type: ObjectId, ref:'Batch' },
    userId: { type: ObjectId, required: true, ref: 'User'}
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