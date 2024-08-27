const express = require('express');
const postrouter = express.Router();
const Post = require('../Models/Post');
const auth = require('../middleware/auth');

postrouter.post('/new',auth,async(req,res)=>{
    const {mood,title,content} = req.body;
    try{
        const newPost = new Post({
            user:req.user.id,
            mood,
            title,
            content,
            
        });

        const savedPost = await newPost.save();
        res.status(201).json(savedPost);

    }catch(err){
        res.status(500).json({ message: 'Server error', error: err.message });
    }
})

postrouter.get('/load',async(req,res)=>{
    try{
        const posts = await Post.find().populate('user','username');
        res.status(200).json(posts);
    }catch(err){
        res.status(500).json({message:'Server error in getting posts'});
    }
})

module.exports = postrouter;