const Images = require("../models/images");

//Method get | read images
exports.Get = async (req, res) => {
    try {
        const response = await Images.find();
        res.send(response);
    } catch (error) {
        console.log(error);
        res.status(400).send("error in read images");
    }
};

//Method post | delete images
exports.Post = async (req, res) => {
    try {
        const response = new Images({
            ...req.body,
            createBy: req.user.id,
            CreateAdd: Date.now(),
        });
        const create = await response.save();
        res.status(200).send(create);
    } catch (error) {
        console.log(error);
        res.status(400).send("error in write images");
    }
};

//Method delete | create images
exports.Delete = async (req, res) => {
    const { idDelete } = req.params;
    try {
        const deletePost = await Images.findById(idDelete);
        const response = await deletePost.remove();
        res.status(200).send(response);
    } catch (error) {
        console.log(error);
        res.status(400).send("error in delete images");
    }
};