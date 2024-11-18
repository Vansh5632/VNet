const comment = require('../../models/moodSection/commentModel');
const post = require('../../models/moodSection/postModel');

const addcomment = async (req, res) => {
    try{
        const {content} = req.body;
        const postId = req.params.id;
        const userId = req.user._id;
        const newComment = new comment({content,postId,userId});
        await newComment.save();

        const post = await post.findById(postId);
        post.comments.push(newComment._id);
        await post.save();
        res.status(201).json(newComment);
    }catch(err){
        res.status(500).json({error:err.message});
    }