const router = require('express').Router(),
    Student = require('../../models/student'),
    User = require('../../models/user'),
    
    
    
    logger = require('../../config/logger');
    const TAG = "StudentCotroller";
//TODO fetch all students
router.get('/', async (req, res)=>{
    try{
        const students = await Student.find().select('name').exec();
        return res.json({success:true, students});
    }catch(err){

    }
    return res.json({success:false, msg:"Req not handled"})
});

//create user and student
router.post('/', async (req, res)=>{
    try{
        const student = new Student({
            name: req.body.name,
            roll_no: req.body.roll_no,
            email : req.body.email,
            department: req.body.department,
            batch: req.body.batch
        });
        await student.save();
        let user = new User({
            username: req.body.username,
            password: req.body.password,
            designation: req.body.designation,
            profile: student._id
        });
        const hashedUser = await User.createUser(user);
        return res.json({success:true,hashedUser, student});

    }catch(e){
        logger.error(e, {TAG});
        return res.json({success:false, msg:"could not create student"});
    }
});

//TODO Update student profile
router.put('/', async (req, res)=>{
    return res.json({success:false, msg:"Req not handled"})
})
router.delete('/', async (req, res)=>{
    return res.json({success:false, msg:"Req not handled"})
})
router.get('/:id', async (req, res)=>{
    return res.json({success:false, msg:"Req not handled"})
})












module.exports = router;