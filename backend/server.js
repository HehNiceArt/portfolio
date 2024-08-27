import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postsRouter from './routes/posts.js'; // Import the posts router
import imagesRouter from './routes/images.js'; // Import the images router

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => { console.log('MongoDB connected') })
    .catch(err => console.error(err));

// Use the posts routes
app.use('/api/posts', postsRouter); // Use the posts router

// Use the images routes
app.use('/api/images', imagesRouter); // Use the images router

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});