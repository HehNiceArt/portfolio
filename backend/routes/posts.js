import express from 'express';
import mongoose from 'mongoose';
import sanitize from 'sanitize-html';
import authMiddleware from '../middleware/auth.js';
import { validatePost } from '../middleware/validator.js';
const router = express.Router();

// Define your Post schema
const postSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    createdAt: { type: Date, default: Date.now }
}, { collection: 'illust' });

const Post = mongoose.model('Post', postSchema);

router.get('/latest', async (req, res) => {
    try {
        const allPosts = await Post.find().lean();
        const latestPost = await Post.findOne().sort({ createdAt: -1 }).lean();

        if (!latestPost) {
            return res.status(404).json({
                message: 'No posts found',
                debug: {
                    collectionName: Post.collection.collectionName,
                    totalPosts: allPosts.length
                }
            });
        }
        res.json(latestPost);
    } catch (error) {
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