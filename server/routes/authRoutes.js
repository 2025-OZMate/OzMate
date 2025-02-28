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
        const { userid, password } = req.body;
        const user = await User.findOne({ userid });

        if (!user) return res.status(400).json({ message: "User not found." });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Password does not match" });

        const token = jwt.sign({ userid: user.userid }, "secretKey", { expiresIn: "1h" });
        res.json({
            token,
            user: { username: user.username, userid: user.userid, _id: user._id }
        });
    } catch (error) {
        res.status(500).json({ message: "로그인 실패", error });
    }
});

// 북마크 추가/삭제 API
router.post("/toggleBookmark", async (req, res) => {
    const { userId, bookmark } = req.body;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // 북마크 배열이 없는 경우 초기화
        if (!user.bookmarks) {
            user.bookmarks = [];
        }

        // 북마크가 이미 존재하는지 확인
        const existingBookmarkIndex = user.bookmarks.findIndex(
            (b) => b.title === bookmark.title
        );

        if (existingBookmarkIndex === -1) {
            user.bookmarks.push(bookmark); // 없으면 추가
        } else {
            user.bookmarks.splice(existingBookmarkIndex, 1); // 있으면 삭제
        }

        // 데이터가 저장된 후에 응답을 보냄
        await user.save(); // 저장이 끝난 후 응답 보내기
        console.log('저장된 user', user)

        res.status(200).json(user.bookmarks);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
});

// 특정 사용자의 북마크 조회 API
router.get('/getUserBookmarks/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        // 사용자 및 북마크 조회
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user.bookmarks); // 사용자의 북마크 목록 반환
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '내부 서버 오류' });
    }
});

module.exports = router;
