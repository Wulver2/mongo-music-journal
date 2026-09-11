import express from "express";
import bcrypt from "bcrypt";
import "dotenv/config";
import User from "../models/user.js";
import jwt from "jsonwebtoken";

export const router = express.Router("express");

//must have a unique username
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const userInfo = await User.findOne({ email: email });

        if (userInfo) {
            const isMatch = await bcrypt.compare(password, userInfo[0].password);
            if (isMatch) {
                const sessionToken = jwt.sign(
                    userInfo[0].id,
                    process.env.JWT_SECRET,
                    { expiresIn: "7d" }
                );
                res.cookie(
                    "sessionToken",
                    sessionToken,
                    {
                        expires: new Date(Date.now + 100 * 60 * 60 * 24 * 7),
                        httpOnly: True,
                        secure: process.env.NODE_ENV === 'production',
                        sameSite: 'strict'
                    }
                );
                res.status(200).json(userInfo[0]);
            }
            else {
                res.status(401).json({ message: "incorrect email or password" });
            }
        }
        else {
            res.status(401).json({ message: "incorrect email or password" });
        }


    } catch (error) {
        console.error(error.message);
    }
});

router.post('/register', async (req, res) => {
    try {
        const { email, username, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);
        //email and username should be unique
        const emailExist = await User.exists({ email: email });
        const usernameExist = await User.exists({ username: username });
        if (emailExist) {
            res.json({ message: "email already in use" });
        }
        else if (usernameExist) {
            res.json({ message: "username already in use" })
        }
        else {
            const userInfo = await User.create({ email: email, username: username, password: hashedPassword });
            // token and cookie (will make it a function for less code duplication)
            const sessionToken = jwt.sign(
                userInfo.id,
                process.env.JWT_SECRET,
                { expiresIn: "7d" }
            );
            res.cookie(
                "sessionToken",
                sessionToken,
                {
                    expires: new Date(Date.now + 100 * 60 * 60 * 24 * 7),
                    httpOnly: True,
                    secure: process.env.NODE_ENV === 'production',
                    sameSite: 'strict'
                }
            );
            res.status(201).json({ message: "inserted user data" });
        }
    } catch (error) {
        console.error(error.message);
    }
});

router.post('/logout', async (req, res) => {
    try {
        res.clearCookie("sessionToken", {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            expires: new Date(0)
        });

        res.json({ message: "user logged out" });
    } catch (error) {
        console.error(error.message);
    }
});

router.delete('/deleteAcc', async (req, res) => {
    try {
        const { user_email } = req.body;
        const userInfo = await User.findOne({ email: user_email });
        await userInfo.deleteOne()
        const deleted = User.findById(userInfo)
        // should be null
        res.json({ message: `Previous user is now ${deleted}` })
    } catch (error) {
        console.error(error.message)
    }
})

export default router