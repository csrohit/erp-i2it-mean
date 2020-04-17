const router = require('express').Router(),
    userController = require('./controllers/userController'),
    studentController = require('./controllers/studentController'),
    batchController = require('./controllers/batchController'),
    designationController = require('./controllers/designationController'),
    departmentController = require('./controllers/departmentController'),
    subjectController = require('./controllers/subjectController'),
    tutorController = require('./controllers/tutorController');

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
router.use('/department', departmentController);
router.use('/subject', subjectController);
router.use('/tutor', tutorController);
router.use('/student', studentController);
router.use('/batch', batchController);

module.exports = router;