const {Schema, model} = require('mongoose');
const {ObjectId} = Schema.Types;




const tutorSchema = new Schema({
    email: {type: String},
    department: {type:ObjectId, ref: 'Department'},
    subjects: [{type: ObjectId, ref: 'Subject'}],
    username: {type: String, required: true}
});


const Tutor = module.exports = model('Tutor', tutorSchema);