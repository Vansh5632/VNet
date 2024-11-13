const Post = require('../models/post.model.js');
const { create } = require('../../Models/User.js');

createPost = async (req, res) => {
    try {
        const { title, mood, content } = req.body;
        const userId = req.user._id;
        const newPost = new Post({ title, mood, content, userId });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

toggleLike = async (req, res) => {
    try{
        const postId = req.params.id;
        const userId = req.user._id;
        const post = await Post.findById(postId);
        if(post.likes.includes(userId)){
            post.likes = post.likes.filter(id=>id!==userId);
    }

    else{
        post.likes.push(userId);
    }
    await post.save();
    res.status(200).json(post);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
};

module.exports = { createPost, toggleLike };
