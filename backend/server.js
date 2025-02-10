import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import NodeCache from 'node-cache';
import postsRouter from './routes/posts.js'; // Import the posts router
import imagesRouter from './routes/images.js'; // Import the images router
import animationRouter from './routes/animations.js'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
const cache = new NodeCache({ stdTTL: 600 });

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
    socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
})
    .then(() => { console.log('MongoDB connected') })
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
}, animationRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});