import express from 'express';
import mongoose from 'mongoose';
import sanitize from 'sanitize-html';
import authMiddleware from '../middleware/auth.js';
import { validatePost } from '../middleware/validator.js';
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
    const cacheKey = 'latestPost';
    const cachedData = req.cache.get(cacheKey);

    if (cachedData) {
        return res.json(cachedData);
    }

    try {
        const latestPost = await Post.findOne().sort({ createdAt: -1 }).lean();
        if (!latestPost) {
            return res.status(404).json({ message: 'No posts found' });
        }
        req.cache.set(cacheKey, latestPost);
        res.json(latestPost);
    } catch (error) {
        console.error('Error fetching latest post:', error);
        res.status(500).json({ message: error.message });
    }
});
// Route to get all posts with pagination
router.get('/', async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const cacheKey = `posts_${page}_${limit}`;
    const cachedData = req.cache.get(cacheKey);

    if (cachedData) {
        return res.json(cachedData);
    }

    try {
        const posts = await Post.find()
            .sort({ createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(Number(limit))
            .lean();

        if (posts.length === 0) {
            return res.status(404).json({ message: 'No posts found' });
        }
        req.cache.set(cacheKey, posts);
        res.status(200).json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ message: error.message });
    }
});

router.post('/', authMiddleware, validatePost, async (req, res) => {
    try {
        const sanitizedData = {
            url: sanitize(req.body.url),
            name: sanitize(req.body.name),
            description: sanitize(req.body.description)
        };

        const post = new Post(sanitizedData);
        await post.save();
        res.status(201).json(post);
    } catch (err) {
        console.error('Error creating post: ', err);
        res.status(500).json({ message: err.message });
    }
});

export default router;