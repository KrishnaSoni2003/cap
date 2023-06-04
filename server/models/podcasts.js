import mongoose from 'mongoose';

const podcastSchema = mongoose.Schema({
    title: String,
    audio : String,
    cover: String,
    tags: [String],
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const podcastMessage = mongoose.model('PodcastMessage', podcastSchema);

export default podcastMessage;
