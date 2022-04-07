const Child = require("../models/child");

exports.PostChild = async (req, res) => {
    try {
        const child = new Child({
            ...req.body,
            createBy: req.user.id,
            CreateAdd: Date.now(),
        });
        const response = await child.save();
        res.status(200).send(response);
    } catch (error) {
        console.log(error);
        res.status(400).send("error in create user");
    }
};

//Metodo para ver child
exports.GetChild = async (req, res) => {
    try {
        const response = await Child.find();
        res.status(200).send(response);
    } catch (error) {
        console.log(error);
        res.status(400).send("error in method get for read user");
    }
};

//Metodo para modificar datos de child
exports.PutChild = async (req, res) => {
    const { idUser } = req.params;
    try {
        const response = await Child.findOneAndUpdate({ _id: idUser }, req.body, { new: true });
        res.status(200).send(response);
    } catch (error) {
        console.log(error);
        res.status(400).send("error in update of user");
    }
};

//Method post | create jobs
exports.DeleteChild = async (req, res) => {
    const { idDelete } = req.params;
    try {
        const deletePost = await Child.findById(idDelete);
        const response = await deletePost.remove();
        res.status(200).send(response);
    } catch (error) {
        console.log(error);
        res.status(400).send("error in delete post");
    }
};