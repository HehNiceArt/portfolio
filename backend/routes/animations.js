import express from 'express';
import Animation from '../models/Animation.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const { page = 1, limit = 16 } = req.query;
    const cacheKey = `animations_${page}_${limit}`;
    const cachedData = req.cache.get(cacheKey);

    if (cachedData) {
        return res.json(cachedData);
    }
    try {
        const animations = await Animation.find()
            .sort({ createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(Number(limit))
            .lean();
        if (animations.length === 0) {
            return res.status(404).json({ message: 'No animations found' });
        }
        req.cache.set(cacheKey, animations);
        res.status(200).json(animations);
    } catch (err) {
        console.error('Error fetching animations: ', err);
        res.status(500).json({ message: err.message });
    }
})
router.post('/', async (req, res) => {
    try {
        const animation = new Animation(req.body);
        await animation.save();
        res.status(201).json(animation);
    } catch (err) {
        console.error('Error creating animation: ', err);
        res.status(500).json({ message: err.message });
    }
});

export default router;