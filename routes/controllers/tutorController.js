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
        //  create new user and tutor documents
        let user = new User({
            userName: req.body.userName,
            name : req.body.name,
            password: req.body.password,
            designation: req.body.designation,
        });

        let tutor = new Tutor({
            email : req.body.email,
            subjects : req.body.subjects,
            department : req.body.department,
            userId: user._id
        });
        user.profileId = tutor._id;

        // check for validation errors
        // userName is also checked for uniqueness
        user.validateSync();
        tutor.validateSync()


        tutor = (await tutor.save()).toObject();
        user = (await user.save()).toObject();

        // send tutor interface as expected by client
        delete user._id;
        delete user.profileId;
        delete user.__v;
        delete tutor.__v;

        //? _id => id of tutor 
        //? userId => id of user
        return res.json({...user, ...tutor});
    }catch(e){
        logger.error(e, {TAG});
        // errors are validationErrors or db error
        return res.status(500).send(e);
    }
});



router.get('/:id', async (req, res) => {
    try{
        let tutor = await Tutor.findById(req.params.id).populate('userData');
        return res.json(tutor);
    }catch(e){
        return res.status(500).send(e);
    }
});


module.exports = router;