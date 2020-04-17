const {Schema, model} = require('mongoose');
const {ObjectId} = Schema.Types;



const departmentSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    batch:[{
        type: ObjectId,
        ref:'Batch'
    }],
    faculty:[{
        type: ObjectId,
        ref: 'Tutor'
    }],
    head:{
        type: ObjectId,
        ref: 'Tutor'
    }
});


const Department = module.exports = model('Department', departmentSchema);