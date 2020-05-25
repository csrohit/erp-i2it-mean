const router = require('express').Router(),
    User = require('../../models/user'),
    passport = require('passport'),
    jwt = require('jsonwebtoken'),
    
    
    config = require('../../config/config');

const TAG = 'UserController';

router.get('/', async (req,res)=>{
    try{
        const users = await User.find().exec();
        return res.json({success:true, users});
    }catch(e){
        return res.json({success:false, msg:"could not fetch users"});
    }
})

router.post('/', (req, res)=>{
    let newUser = new User({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        designation: req.body.designation
    });
    User.addUser(newUser, (err, user)=>{
        if(err){
            return res.json({success:false, msg:"Failed to create user"});
        }
        else{
            return res.json({success:true, msg:"User has been created"});
        }
    })
})

// update user

router.post('/login', async (req, res)=>{
    const {username, password} = req.body;
    try{
        const user = await User.findByUsername(username);
        if(await User.comparePassword(password, user.password)){
            user.password=undefined;
            const token = jwt.sign({data:user}, config.secret, {expiresIn:604800});
            return res.json({success:true,token:`JWT ${token}`, user});
        }else return res.json({success:false, msg:"Invalid Password"})
    }catch(e){
        return res.json({success:false, msg:e});
    }
})
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res) => {
    return res.json({success:true, user:req.user});
  });

module.exports = router;