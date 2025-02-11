const authMiddleware = (req, res, next) => {
    console.log('Received API Key:', req.headers['x-api-key']);
    console.log('Expected API Key:', process.env.API_KEY);

    const apiKey = req.headers['x-api-key'];
    if (!apiKey || apiKey !== process.env.API_KEY) {
        return res.status(401).json({
            message: 'Unauthorized',
            debug: {
                hasApiKey: !!apiKey,
                keyLength: apiKey ? apiKey.length : 0
            }
        });
    }
    next();
};

export default authMiddleware; 