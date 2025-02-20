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
            return res.status(400).json({ message: "비밀번호가 일치하지 않습니다." });
        }

        const existingUser = await User.findOne({ userid });
        if (existingUser) {
            return res.status(400).json({ message: "이미 존재하는 아이디입니다." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, userid, password: hashedPassword });

        await newUser.save();
        res.status(201).json({ message: "회원가입 성공!" });
    } catch (error) {
        console.error("서버 오류 발생:", error);
        res.status(500).json({ message: "회원가입 실패", error });
    }
});


// 로그인 API
router.post("/login", async (req, res) => {
    try {
        const { userid, password } = req.body;
        const user = await User.findOne({ userid });

        if (!user) return res.status(400).json({ message: "사용자를 찾을 수 없습니다." });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "비밀번호가 일치하지 않습니다." });

        const token = jwt.sign({ userid: user.userid }, "secretKey", { expiresIn: "1h" });
        res.json({ token, user: { username: user.username, userid: user.userid } });
    } catch (error) {
        res.status(500).json({ message: "로그인 실패", error });
    }
});

module.exports = router;
