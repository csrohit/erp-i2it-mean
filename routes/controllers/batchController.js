const router = require('express').Router(),
    Batch = require('../../models/batch'),
    logger = require('../../config/logger');

const TAG = "BatchController";

router.get('/', async (req, res) => {
    try{
        const batches = await Batch.find().select('title').exec();
        return res.json({success:true, batches});
    }catch(e){
        logger.error(e, {TAG});
        return res.json({success:false, msg: "could not fetch batches"});
    }
})

router.post('/', async (req, res) => {
    try{
        const batch = new Batch({
            title: req.body.title,
            department: req.body.department,
            subjects: req.body.subjects,
            room: req.body.room,
            strength: req.body.strength,
            head: req.body.head
        });
        await batch.save();
        return res.json({success:true, batch});
    }catch(e){
        logger.error(e, {TAG});
        return res.json({success:false, msg: "could not create batch"});
    }
})































module.exports = router;