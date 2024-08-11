import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

// Define your Post schema
const postSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageUrl: String,
    createdAt: { type: Date, default: Date.now },
    date: { type: Date, default: Date.now }
});

const Post = mongoose.model('Post', postSchema, 'illust');

// Route to get the latest post
router.get('/latest', async (req, res) => {
    try {
        const latestPost = await Post.findOne().sort({ createdAt: -1 });
        if (!latestPost) {
            return res.status(404).json({ message: 'No posts found' });
        }
        res.json({ title: latestPost.title, imageUrl: latestPost.imageUrl });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to get all posts
router.get('/', async (req, res) => {
    try {
        //const posts = await Post.find({}, '_id title description').exec();
        const posts = await Post.find();
        if (posts.length === 0) {
            return res.status(404).json({ message: 'No posts found' });
        }
        res.status(200).json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error); // Log the error

        res.status(500).json({ message: error.message });
    }
});

export default router;