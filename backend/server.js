import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import NodeCache from 'node-cache';
import postsRouter from './routes/posts.js'; // Import the posts router
import imagesRouter from './routes/images.js'; // Import the images router
import animationsRouter from './routes/animations.js';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
const cache = new NodeCache({ stdTTL: 600 });

const corsOptions = {
    origin: process.env.ALLOWED_ORIGINS?.split(',') || 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
    optionsSuccessStatus: 204
};
// Middleware
app.use(cors(corsOptions)); // Enable CORS for all routes
app.use(express.json());
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'", "https://api.emailjs.com"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
            imgSrc: ["'self'", "data:", "https:", "blob:"],
            connectSrc: ["'self'", "https://api.emailjs.com", process.env.REACT_APP_API_BASE_URL],
            fontSrc: ["'self'", "https://fonts.gstatic.com"],
            objectSrc: ["'none'"],
            mediaSrc: ["'self'"],
            frameSrc: ["'none'"]
        }
    },
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: { policy: "cross-origin" }
}));

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
    socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
    dbName: 'Portfolio'
})
    .then(() => {
        console.log('MongoDB connected', mongoose.connection.db.databaseName);
        console.log('Available collections:',
            mongoose.connection.db.listCollections().toArray()
                .then(collections => collections.map(c => c.name))
                .then(names => console.log(names))
        );
    })
    .catch(err => console.error(err));

mongoose.connection.on('error', err => {
    console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
});
// Use the posts routes
app.use('/api/posts', (req, res, next) => {
    req.cache = cache;
    next();
}, postsRouter); // Use the posts router

// Use the images routes
app.use('/api/images', (req, res, next) => {
    req.cache = cache;
    next();
}, imagesRouter); // Use the images router

app.use('/api/animations', (req, res, next) => {
    req.cache = cache;
    next();
}, animationsRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});