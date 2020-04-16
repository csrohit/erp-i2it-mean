const mongoose = require('mongoose');

const TAG = 'designationModel';

const designationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    permissions: [{
        type: String,
        required: true
    }]
});


const Designation = module.exports = mongoose.model("Designation", designationSchema);

module.exports.createDesignation = (desgn, callback) => desgn.save(callback);

module.exports.fetchDesignations = () => {
    return new Promise(async (resolve, reject) => {
        try {
            return resolve(await Designation.find({}));
        }
        catch(e){
            return reject(e);
        }
    })
}