const {Schema, model} = require('mongoose');
const {ObjectId} = Schema.Types;


const batchSchema = new Schema({
    title: {type: String, required: true},
    department: {type: ObjectId, ref: "Department"},
    subjects: [{type: ObjectId, ref: "Subject"}],
    room: {type: String},
    strength: {type:Number},
    head: {type: ObjectId, ref: 'Tutor'}
});


const Batch = module.exports = model("Batch", batchSchema);