import { rateLimit } from 'express-rate-limit';

const authMiddleware = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];

    if (!apiKey || apiKey !== process.env.API_KEY) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    next();
};

export default authMiddleware; 