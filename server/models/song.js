import mongoose from "mongoose";

// may add rating 
// could add release date
const songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Artist",
        required: true
    },
    album: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Album"
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