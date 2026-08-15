import mongoose from "mongoose";

const artistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    artistPicUrl: {type: String},
    bio: {type: String},
    tags: {type: [String]}
});

const Artist = mongoose.model("Artist", artistSchema);

export default Artist;