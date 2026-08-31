import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicUrl: { type: String },
    favoriteSongs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Song"
    }],
    favoriteArtists: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Artist"
    }],
    favoriteAlbums: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Album"
    }],
    createdPlaylists: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Playlist"
    }]
})

const User = mongoose.model("User", userSchema);

export default User;