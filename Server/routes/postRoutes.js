const express = require('express');
const { createPost, toggleLike } = require('../controllers/postController');
const { addcomment } = require('../controllers/commentController');
const router = express.Router();

router.post('/create', createPost);
router.post('/like/:postId', toggleLike);
router.post('/comment/:postId', addcomment);

module.exports = router;