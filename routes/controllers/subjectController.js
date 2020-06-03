const router = require('express').Router(),
    Subject = require('../../models/subject'),
    logger = require('../../config/logger');

const TAG = "SubjectController";

router.get('/', async (req, res) => {
    try{
        const subjects = await Subject.find().select('title').exec();
        return res.json(subjects);
    }catch(e){
        logger.error(e, {TAG});
        return res.status(500).send("could not fetch subjects");
    }
})

router.post('/', async (req, res) => {
    try{
        const subject = new Subject({
            title: req.body.title,
            department: req.body.department,
            university_code: req.body.university_code,
            course_outcomes: req.body.course_outcomes,
            course_objectives: req.body.course_objectives,
            credits: req.body.credits
        });
        await subject.save();
        return res.json({success:true, subject});
    }catch(e){
        logger.error(e, {TAG});
        return res.json({success:false, msg: "could not create subject"});
    }
})































module.exports = router;