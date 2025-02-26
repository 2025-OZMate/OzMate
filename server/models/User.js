const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    userid: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    //북마크 배열
    bookmarks: [
        {
            title: String,
            thumbnail: String,
            description: String,
            category: String,
        }
    ]


});



module.exports = mongoose.model("User", UserSchema);
