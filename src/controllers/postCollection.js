const Post = require("../models/post");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//Method get | read publication
exports.Get = async (req, res) => {
    try {
        const getPublication = await Post.find();
        res.send(getPublication);
    } catch (error) {
        console.log(error);
        res.status(400).send("error in read post");
    }
};

//Method post | create publication
exports.Post = async (req, res) => {
    try {
        const postPublication = new Post({
            ...req.body,
            CreateAdd: Date.now(),
        });
        await postPublication.save();
        res.status(200).send("create post with exit");
    } catch (error) {
        console.log(error);
        res.status(400).send("error in write post");
    }
};
