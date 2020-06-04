const {Schema, model} = require('mongoose');
const {ObjectId} = Schema.Types;




const tutorSchema = new Schema({
    email: {type: String},
    department: {type:ObjectId, ref: 'Department'},
    subjects: [{type: ObjectId, ref: 'Subject'}],
    user: { type: ObjectId, ref: 'User'}
});


const Tutor = module.exports = model('Tutor', tutorSchema);