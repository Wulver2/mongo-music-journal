import mongoose from "mongoose";

const artistSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    artistPicUrl: {type: String},
    bio: {type: String},
    tags: {type: [String]}
});

const artist = mongoose.model("Artist", artistSchema);

export default artist;