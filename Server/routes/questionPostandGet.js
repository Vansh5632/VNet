const express = require('express');
const auth = require('../middleware/auth');
const Question = require('../Models/question');
const router = express.Router();

router.post('/submit-answers', auth, async (req, res) => {
    try {
        const userId = req.user.id;
        const answers = req.body.answers.map(answer => ({ ...answer, userId }));
        await Question.insertMany(answers);
        res.status(201).json({ message: 'Answers saved successfully' });
    } catch (err) {
        console.error('Error saving answers:', err);
        res.status(500).json({ error: 'Error saving answers' });
    }
});

router.get('/user-answers', auth, async (req, res) => {
    try {
        const userId = req.user.id; // Assuming auth middleware sets req.user
        const answers = await Question.find({ userId });
        res.status(200).json(answers);
    } catch (err) {
        console.error('Error getting answers:', err);
        res.status(500).json({ error: 'Error getting answers' });
    }
});

module.exports = router;