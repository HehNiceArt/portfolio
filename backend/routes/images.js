import express from 'express';
import Image from '../models/Image.js'; // Assuming you have an Image model

const router = express.Router();
router.get('/', async (req, res) => {
    try {
        const images = await Image.find();
        res.json(images);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;