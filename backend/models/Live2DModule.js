import mongoose from "mongoose";

const live2dSchema = new mongoose.Schema({
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
})

live2dSchema.index({ createdAt: -1 });
const Live2D = mongoose.model('Live2D', live2dSchema);
export default Live2D;
