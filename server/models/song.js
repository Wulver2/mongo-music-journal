import mongoose from "mongoose";

// may add rating 
const songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    album: {
        type: String
    },
    tags: {
        type:[String]
    },
    lyrics: {
        type: String
    }
});

const Song = mongoose.model("Song", songSchema);

export default Song;