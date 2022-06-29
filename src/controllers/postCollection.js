const Post = require("../models/post");

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

//Method delete | delete publication
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

//Method post | create publication
exports.Delete = async (req, res) => {
    const { idDelete } = req.params;
    try {
        const deletePost = await Post.findById(idDelete);
        const response = await deletePost.remove();
        res.status(200).send(response);
    } catch (error) {
        console.log(error);
        res.status(400).send("error in delete post");
    }
};