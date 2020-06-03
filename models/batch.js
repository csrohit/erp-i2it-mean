const {Schema, model} = require('mongoose');
const {ObjectId} = Schema.Types;

// TODO: add fields to check if subjects is theory/practical only or having both + marking scheme for that subject
const batchSchema = new Schema({
    title: {type: String, required: true},
    department: {type: ObjectId, ref: "Department", required: true},
    subjects: [{type: ObjectId, ref: "Subject"}],
    room: {type: String},
    strength: {type:Number},
    head: {type: ObjectId, ref: 'Tutor'}
});


// batchSchema.pre('save', function(next) {
//     console.log("pre hook is registered");
//     console.log(this);
//     this.title = "modified title";
//     next();
// });


const Batch = module.exports = model("Batch", batchSchema);