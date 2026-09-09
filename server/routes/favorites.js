import express from "express"
import verifyToken from "../middleware/verifyToken.js";
import User from "../models/user.js";
import Song from "../models/song.js";
import Album from "../models/album.js";
import Artist from "../models/artist.js";

export const router = express.Router("express");

// add favorite songs/artists 
// TODO:// prevent song, artists, etc from being added multiple times
router.post("/song", verifyToken, async (req, res) => {
    try {
        const { song, email } = req.body;
        const user = await User.findOne({ email: email });
        const songId = await Song.findOne(song)._id;
        // check if id is already in favorite songs

        user.favoriteSongs.push(songId);
        await user.save();
    }
    catch (error) {
        console.error(error.message);
    }

});

router.post("/artist", verifyToken, async (req, res) => {
    try {
        const { artist, email } = req.body;
        const user = await User.findOne({ email: email });
        const artistId = await Artist.findOne(artist)._id;

        user.favoriteArtists.push(artistId);
        await user.save();
    }
    catch (error) {
        console.error(error.message);
    }
});
router.post("/album", verifyToken, async (req, res) => {
    try {
        const { album, email } = req.body;
        const user = await User.findOne({ email: email });
        const albumId = await Album.findOne(album)._id;

        user.favoriteAlbums.push(albumId);
        await user.save();
    }
    catch (error) {
        console.error(error.message);
    }
});

// may not need to be protected unless user selects private
// when public anyone can see favorites
router.get("/songs", verifyToken, async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email: email });
        const songs = []

        user.favoriteSongs.forEach(songId => {
            songs.push(Song.findById(songId));
        });

        res.status(200).json(songs)
    } catch (error) {
        console.error(error.message)
    }
})

router.delete("/artist/:artist", verifyToken, async (req, res) => {
    try {
        const { email } = req.body;
        const { artist } = req.params;
        const user = await User.findOne({ email: email });
        const artistId = await Artist.findOne(artist)._id;

        user.favoriteArtists.pull(artistId);
        await user.save();
    } catch (error) {
        console.error(error.message);
    }
});

router.delete("/song/:song", verifyToken, async (req, res) => {
    try {
        const { email } = req.body;
        const song = req.params;
        const user = await User.findOne({ email: email });
        const songId = await Song.findOne(song)._id;

        user.favoriteSongs.pull(songId);
        await user.save();
    } catch (error) {
        console.error(error.message);
    }
});

router.delete("/album/:album", verifyToken, async (req, res) => {
    try {
        const { email } = req.body;
        const { album } = req.params;
        const user = await User.findOne({ email: email });
        const albumId = await Album.findOne(album)._id;

        user.favoriteAlbums.pull(albumId)
        await user.save();
    } catch (error) {
        console.error(error.message);
    }
});

export default router;