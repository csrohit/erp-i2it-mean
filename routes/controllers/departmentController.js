const router = require('express').Router(),
    Department = require('../../models/department'),
    logger = require('../../config/logger');

const TAG = "DepartmentController"

router.get('/', async (req, res) => {
    try{
        const departments = await Department.find().select('title').exec();
        return res.json({success: true, departments});
    }catch(e){
        logger.error(e);
        return res.json({success: false, msg: "could not fetch departments"});
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
        return res.json({success: true, newDepartment});
    }catch(e){
        logger.error(e, {TAG});
        return res.json({success: false, msg: "could not create department"});
    }
});








    module.exports = router;