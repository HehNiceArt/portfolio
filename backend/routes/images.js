import express from 'express';
import Image from '../models/Image.js'; // Assuming you have an Image model
import sanitize from 'sanitize-html';

const router = express.Router();

// Route to get all images with pagination
router.get('/', async (req, res) => {
    const { page = 1, limit = 16 } = req.query;
    const cacheKey = `images_${page}_${limit}`;
    const cachedData = req.cache.get(cacheKey);

    if (cachedData) {
        return res.json(cachedData);
    }

    try {
        const images = await Image.find()
            .sort({ createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(Number(limit))
            .lean();

        if (images.length === 0) {
            return res.status(404).json({ message: 'No images found' });
        }
        req.cache.set(cacheKey, images);
        res.status(200).json(images);
    } catch (err) {
        console.error('Error fetching images:', err);
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        // Sanitize input fields
        const sanitizedData = {
            url: sanitize(req.body.url),
            name: sanitize(req.body.name),
            description: sanitize(req.body.description)
        };

        const image = new Image(sanitizedData);
        await image.save();
        res.status(201).json(image);
    } catch (err) {
        console.error('Error creating image: ', err);
        res.status(500).json({ message: err.message });
    }
});

export default router;