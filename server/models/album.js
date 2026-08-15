import mongoose, { Schema } from "mongoose";

const albumSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Artist",
        required: true
    },
    coverURL: {type: String},
    releaseDate: {type: Date},
    tags: {type: [String]}
});

const Album = mongoose.model("Album", albumSchema);

export default Album;