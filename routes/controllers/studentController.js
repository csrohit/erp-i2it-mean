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
        // create new user and student documents 
        let user = new User({
            userName: req.body.userName,
            name: req.body.name,
            password: req.body.password,
            designation: req.body.designation
        });
        let student = new Student({
            rollNo: req.body.rollNo,
            email : req.body.email,
            department: req.body.department,
            batch: req.body.batch,
            userId: user._id
        });
        user.profileId = student._id;

        // Check for validation errors
        // userName is also validated for uniqueness
        user.validateSync();
        student.validateSync();

        // save student and user
        student = (await student.save()).toObject();
        user = (await user.save()).toObject();
        
        // send student interface as expected by client
        delete user._id;
        delete user.profileId;
        delete user.__v;
        delete student.__v;

        //? _id => id of student 
        //? userId => id of user
        return res.json({...user, ...student});

    }catch(e){
        logger.error(e, {TAG});
        // errors are validationErrors or db error
        return res.status(500).send(e);
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