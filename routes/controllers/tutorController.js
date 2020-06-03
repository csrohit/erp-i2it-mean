const router = require('express').Router(),


    Tutor = require('../../models/tutor'),
    User = require('../../models/user'),
    logger = require('../../config/logger');

const TAG = "TutorController";

router.get('/', async (req, res) => {
    try{
        const tutors = await User.find().select('name').exec();
        return res.json(tutors);
    }catch(e){
        logger.error(e);
        return res.status(500).send("could not fetch tutors");
    }
});

router.post('/', async (req, res) => {
    try{
        const tutor = new Tutor({
            email : req.body.email,
            subjects : req.body.subjects,
            department : req.body.department,
        });
        await tutor.save();
        let user = new User({
            userName: req.body.userName,
            name : req.body.name,
            password: req.body.password,
            designation: req.body.designation,
            profile: tutor._id
        });
        const errors = user.validateSync();
        if(errors){
            return res.status(500).json(errors);
        }
        delete tutor._id;
        user = await user.save();
        return res.json({...user.toObject(), ...tutor.toObject()});
    }catch(e){
        logger.error(e, {TAG});
        return res.json({success:false, msg:"could not create tutor"});
    }
});








    module.exports = router;