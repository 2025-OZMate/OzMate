const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// 회원가입 API
router.post("/register", async (req, res) => {
    try {
        console.log(req.body);
        const { username, userid, password, passwordConfirm } = req.body;

        if (password !== passwordConfirm) {
            return res.status(400).json({ message: "Password does not match." });
        }

        //이미 존재하는 id
        const existingUser = await User.findOne({ userid });
        if (existingUser) {
            return res.status(400).json({ message: "This ID already exists." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, userid, password: hashedPassword });

        await newUser.save();
        res.status(201).json({ message: "Login successful!" });
    } catch (error) {
        console.error("서버 오류 발생:", error);
        res.status(500).json({ message: "회원가입 실패", error });
    }
});


// 로그인 API
router.post("/login", async (req, res) => {
    try {
        const { username, userid, password } = req.body;
        const user = await User.findOne({ userid });

        if (!user) return res.status(400).json({ message: "User not found." });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Password does not match" });

        //username 검증
        if (user.username !== username) {
            return res.status(400).json({
                message: "The names do not match."
            })
        }

        const token = jwt.sign({ userid: user.userid }, "secretKey", { expiresIn: "1h" });
        res.json({
            token,
            user: { username: user.username, userid: user.userid }
        });
    } catch (error) {
        res.status(500).json({ message: "로그인 실패", error });
    }
});

module.exports = router;
