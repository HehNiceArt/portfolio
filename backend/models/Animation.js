import mongoose from "mongoose";

const animationSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: false
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

animationSchema.index({ createdAt: -1 });
const Animation = mongoose.model('Animation', animationSchema, 'animations');
export default Animation; 