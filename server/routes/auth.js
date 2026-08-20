import express from "express";
import bcrypt from "bcrypt";
import "dotenv/config";
import User from "../models/user";
import { jwt } from "jsonwebtoken";

const router = express.router;
//must have a unique username
router.post('/login', async (req, res) => {
    try {
        const { username, password} = req.body;
        const userInfo = await User.findOne({username: username});
        
        if (userInfo) {
            const isMatch = await bcrypt.compare(password, userInfo[0].password);
            if (isMatch) {
                const sessionToken = jwt.sign(
                    userInfo[0].id,
                    process.env.JWT_SECRET,
                    {expiresIn: "7d"}
                );
                res.cookie(
                    "sessionToken",
                    sessionToken,
                    {
                        expires: new Date(Date.now + 100 * 60 * 60 * 24 * 7),
                        httpOnly: True,
                    }
                );
                res.status(200).json(userInfo[0]);
            }
            else {
                res.status(401).json({message: "incorrect username or password"});
            }
        }
        else {
            res.status(401).json({message: "incorrect username or password"});
        }
        

    } catch (error) {
        console.error(error.message);
    }
});

router.post('/register', (req, res) => {
    try {
        
    } catch (error) {
        console.error(error.message);
    }
});

router.post('/logout', (req, res) => {
    try {
        
    } catch (error) {
        console.error(error.message);
    }
});
