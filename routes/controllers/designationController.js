const router = require('express').Router(),
    Designation = require('../../models/designation');

const TAG = 'UDesignationController';

router.get('/', async (req, res) => {
    try {
        const designations = await Designation.fetchDesignations();
        return res.json(designations);
    }catch{
        return res.status().send('Could not fetch designations');
    }
});

router.post('/', async (req, res)=>{
        const designation = new Designation({
            title:req.body.title
        });
        Designation.createDesignation(designation, (err, newDesgn) =>{
            if(err) return res.json({success:false, msg:"Could not create designation"});
            else return res.json({success:true, designation:newDesgn})
        })
})

module.exports = router;