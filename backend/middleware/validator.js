import { body, validationResult } from 'express-validator';

export const validatePost = [
    body('url').isURL(),
    body('name').trim().isLength({ min: 3, max: 100 }),
    body('description').trim().isLength({ max: 1000 }),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]; 