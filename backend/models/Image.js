import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create an index on the createdAt field to optimize sorting
imageSchema.index({ createdAt: -1 });

const Image = mongoose.model('Image', imageSchema);
export default Image;