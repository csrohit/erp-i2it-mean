const router = require('express').Router(),


    Tutor = require('../../models/tutor'),
    User = require('../../models/user'),
    logger = require('../../config/logger');

const TAG = "TutorController";

router.get('/', async (req, res) => {
    try{
        const tutors = await Tutor.find().select('name').exec();
        return res.json({success:true, tutors});
    }catch(e){
        logger.error(e);
        return res.json({success:false, msg:"could not fetch tutors"});
    }
});

router.post('/', async (req, res) => {
    try{
        const tutor = new Tutor({
            name : req.body.name,
            email : req.body.email,
            subjects : req.body.subjects,
            department : req.body.department,
        });
        await tutor.save();
        let user = new User({
            username: req.body.username,
            password: req.body.password,
            designation: req.body.designation,
            profile: tutor._id
        });
        const hashedUser = await User.createUser(user);
        return res.json({success:true, tutor, hashedUser})
    }catch(e){
        console.log(e);
        logger.error(e, {TAG});
        return res.json({success:false, msg:"could not create tutor"});
    }
});








    module.exports = router;