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

// GET /search?q=tobi+ferret
// req.query.q
// => "tobi ferret"
router.post("/search/:data", (req, res) => {

    var txt = req.params.data

    Post.find({ "text": new RegExp(txt, "i") })
        .then(posts => res.json(posts)
        )
        .catch(err => res.status(404).json({ msg: "No posts found with that key word." }))
})

module.exports = router;