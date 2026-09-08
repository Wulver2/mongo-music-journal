import express from "express"
import verifyToken from "../middleware/verifyToken";
import User from "../models/user";
import Song from "../models/song";
import Album from "../models/album";
import Artist from "../models/artist";

export const router = express.Router("express");

// add favorite songs/artists
router.post("/song", verifyToken, async (req, res) => {
    try {
        const { song, email } = req.params;
        const user = await User.findOne({ email: email });
        const songId = await Song.findOne(song)._id;

        user.favoriteSongs.push(songId);
        await user.save();
    }
    catch (error) {
        console.error(error.message);
    }

});

router.post("/artist", verifyToken, async (req, res) => {
    try {
        const { artist, email } = req.params;
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
        const { album, email } = req.params;
        const user = await User.findOne({ email: email });
        const albumId = await Album.findOne(album)._id;

        user.favoriteAlbums.push(albumId);
        await user.save();
    }
    catch (error) {
        console.error(error.message);
    }
});

router.delete("/artist/:artist", verifyToken, async (req, res) => {

});

router.delete("/song/:song", verifyToken, async (req, res) => {

});

router.delete("/album/:album", verifyToken, async (req, res) => {

});

export default router;