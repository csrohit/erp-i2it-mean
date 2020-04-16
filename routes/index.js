const router = require('express').Router(),
    userController = require('./controllers/userController'),
    designationController = require('./controllers/designationController');

router.get('/', (req, res)=>{
    return res.send("Homepage");
});
router.post('/test', (req, res)=>{ 
    console.log(req.headers);
    return res.json({success:true, msg:"Connected to server"});
})
router.get('/test', (req, res)=>{
    return res.json({success:true, msg:'user has been registered'});
})

router.use('/user', userController);
router.use('/designation', designationController);

module.exports = router;