const router = require('express').Router(),
    Student = require('../../models/student'),
    User = require('../../models/user'),
    
    
    
    logger = require('../../config/logger');
    const TAG = "StudentCotroller";
//TODO fetch all students
router.get('/', async (req, res)=>{
    return res.json({success:false, msg:"Req not handled"})
});

//create user and student
router.post('/', async (req, res)=>{
    try{
        const newStudent = new Student({
            roll_no: req.body.roll_no,
            department: req.body.department,
            cls: req.body.cls
        });
        const student = await Student.createStudent(newStudent);
        let newUser = new User({
            name: req.body.name,
            username: req.body.username,
            email : req.body.email,
            password: req.body.password,
            designation: req.body.designation,
            profile: student._id
        });
        const user = await User.createUser(newUser);
        return res.json({success:true,user, student});

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