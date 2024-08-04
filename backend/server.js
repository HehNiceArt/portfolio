import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postsRouter from './routes/posts.js'; // Import the posts router

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

console.log('MongoDB URI: ', process.env.MONGODB_URI);
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => { console.log('MongoDB connected') })
    .catch(err => console.error(err));

// Use the posts routes
app.use('/api/posts', postsRouter); // Use the posts router

// Sample route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});