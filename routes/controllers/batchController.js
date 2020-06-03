const router = require('express').Router(),
    Batch = require('../../models/batch'),
    logger = require('../../config/logger');

const TAG = "BatchController";

router.get('/', async (req, res) => {
    try{
        const batches = await Batch.find().select('title').exec();
        return res.json(batches);
    }catch(e){
        logger.error(e, {TAG});
        return res.status(500).send("could not fetch batches");
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
        return res.json(batch);
    }catch(e){
        logger.error(e, {TAG});
        return res.status(500).send("could not create batch");
    }
});

router.get('/test', async (req, res) => {
    let batch = new Batch({title:'sample batch'});
    batch.save(function(err, batch){
        if(err){
            return res.status(500).send('error occurred');
        }
        return res.json({batch});
    });
    // try{
    //     batch = await batch.save();
    //     return res.json({batch});
    // }catch(e){
    //     return res.status(500).send('error occurred');
    // }
});































module.exports = router;