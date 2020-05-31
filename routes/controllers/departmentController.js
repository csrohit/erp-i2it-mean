const router = require('express').Router(),
    Department = require('../../models/department'),
    logger = require('../../config/logger');

const TAG = "DepartmentController"

router.get('/', async (req, res) => {
    try{
        const departments = await Department.find().select('title').exec();
        return res.json(departments);
    }catch(e){
        logger.error(e);
        // status code 500 => internal server error
        return res.status(500).send("could not fetch departments");
    }
});

router.post('/', async (req, res) => {
    try{
        const newDepartment = new Department({
            title: req.body.title,
            batch: req.body.batch,
            faculty: req.body.faculty,
            head: req.body.head,
        });
        await newDepartment.save();
        return res.json(newDepartment);
    }catch(e){
        logger.error(e, {TAG});
        return res.json({success: false, msg: "could not create department"});
    }
});








    module.exports = router;