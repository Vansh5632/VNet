const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../Models/User');
const auth = require('../middleware/auth');
require('dotenv').config();

const router = express.Router();

router.post('/signup',async(req,res)=>{
    const {username,email,password} = req.body;
    try{
        let user = await User.findOne({email});
        if(user){
            return res.status(400).json({msg:'User already exists'});
        }
        user = new User({
            username,
            email,
            password,
        });

        await user.save();
        const payload = {
            user:{
                id:user.id,
            },
        };
        jwt.sign(payload,process.env.JWTSECRETTOKEN,{expiresIn:'7d'},(err,token)=>{
            if(err) throw err;
            res.cookie('token',token,{httpOnly:true});
            res.json({token});
        });
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.post('/signin',async(req,res)=>{
    const {email,password} = req.body;

    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({msg:'User not found'});
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({msg:'invalid credentials'})
        }
        const payload = {
            user:{
                id:user.id,
            },
        };

        jwt.sign(payload,process.env.JWTSECRETTOKEN,{expiresIn:'7d'},(err,token)=>{
            if(err) throw err;
            res.cookie('token',token,{httpOnly:true});
            res.json({token});
        });
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/me',auth,async(req,res)=>{
    try{
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;