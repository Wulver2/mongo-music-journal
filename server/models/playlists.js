import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const playlistSchema = new mongoose.Schema({
    songs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Song",
    }]
});

const playlist = mongoose.model("Playlist", playlistSchema);

export default playlist;