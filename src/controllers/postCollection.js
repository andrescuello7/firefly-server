const Post = require("../models/post");
const User = require("../models/user");
const Banner = require("../models/banner");
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
            createBy: req.user.id,
            CreateAdd: Date.now(),
        });
        const create = await postPublication.save();
        res.status(200).send(create);
    } catch (error) {
        console.log(error);
        res.status(400).send("error in write post");
    }
};

//Method get | read banner
exports.GetBanner = async (req, res) => {
    try {
        const response = await Banner.find();
        res.send(response);
    } catch (error) {
        console.log(error);
        res.status(400).send("error in read post");
    }
};

//Method post | create banner
exports.PostBanner = async (req, res) => {
    try {
        const postBanner = new Banner({
            ...req.body,
            createBy: req.user.id,
            CreateAdd: Date.now(),
        });
        const response = await postBanner.save();
        res.status(200).send(response);
        // res.status(200).send("create post with exit");
    } catch (error) {
        console.log(error);
        res.status(400).send("error in write post of banner");
    }
};

//Method update of banner banner
exports.PutBanner = async (req, res) => {
    const { idBanner } = req.params;
    try {
        const update = await Banner.findOneAndUpdate(
            { _id: idBanner },
            req.body,
            { new: true }
        );
        res.send(update)
    } catch (error) {
        console.log(error);
        res.status(400).send("error in update of user");
    }
};