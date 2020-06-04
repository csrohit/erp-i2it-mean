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
            roll_no: req.body.rollNo,
            email : req.body.email,
            department: req.body.department,
            batch: req.body.batch
        });
        let user = new User({
            userName: req.body.userName,
            name: req.body.name,
            password: req.body.password,
            designation: req.body.designation,
            profile: student._id
        });
        student.user = user._id;
        await student.save();
        let errors = user.validateSync();
        if(errors){
            return res.status(500).json(...errors);
        }
        delete user._id;
        delete student._id;
        user = await user.save();
        return res.json({...user.toObject(), ...student.toObject()});

    }catch(e){
        logger.error(e, {TAG});
        // TODO: check for indexOf('duplicate username') => if present send a custom error else send general error msg to response
        return res.status(500).send("could not create student");
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