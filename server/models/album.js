import mongoose, { Schema } from "mongoose";

const albumSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    coverURL: {type: String},
    releaseDate: {type: Date}
});

const album = mongoose.model("Album", albumSchema);

export default album;