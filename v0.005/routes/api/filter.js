const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Post model
const Post = require("../../models/Post");

// Load User model
const User = require("../../models/User");


// @route   GET api/filter/test
// @desc    Tests filter route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "filter route work" }));

// @route   post api/filter/?search=
// @desc    Tests filter route
// @access  Public
// router.post("/", (req, res) => {

//     Post.find({ "text": /testing/i })
//         .then(posts => res.json(posts))
//         .catch(err => res.status(404).json({ nopostsfound: "no found" }));
// })

router.post("/ask/:data", (req, res) => {
    var key = req.param.data;

    Post.find({ "text": { $regex: key } })
        .then(posts => {
            return res.status(400).json({ posts })
        })
        .catch(err => res.status(404).json({ key }))
})


module.exports = router;