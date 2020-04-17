const {Schema, model} = require('mongoose');
const {ObjectId} = Schema.Types;




const subjectSchema = new Schema({
    title: {type: String, required: true},
    department: {type: ObjectId, ref: 'Department'},
    university_code: {type: String},
    course_objectives: [{type: String}],
    course_outcomes: [{type: String}],
    credits: {type: Number}
});


const Subject = module.exports = model('Subject', subjectSchema);