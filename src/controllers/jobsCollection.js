const Jobs = require("../models/jobs");

//Method get | read jobs
exports.JobGet = async (req, res) => {
    try {
        const response = await Jobs.find();
        res.status(200).send(response);
    } catch (error) {
        console.log(error);
        res.status(400).send("error in read post");
    }
};

//Method delete | delete jobs
exports.JobPost = async (req, res) => {
    try {
        const postJobs = new Jobs({
            ...req.body,
            createBy: req.user.id,
            CreateAdd: Date.now(),
        });
        const response = await postJobs.save();
        res.status(200).send(response);
    } catch (error) {
        console.log(error);
        res.status(400).send("error in write post");
    }
};

//Metodo para modificar datos de jobs
exports.JobPut = async (req, res) => {
    const { idJobs } = req.params;
    try {
        const response = await Jobs.findOneAndUpdate({ _id: idJobs }, req.body, { new: true });
        res.status(200).send(response);
    } catch (error) {
        console.log(error);
        res.status(400).send("error in update of user");
    }
};

//Method post | create jobs
exports.JobDelete = async (req, res) => {
    const { idDelete } = req.params;
    try {
        const deletePost = await Jobs.findById(idDelete);
        const response = await deletePost.remove();
        res.status(200).send(response);
    } catch (error) {
        console.log(error);
        res.status(400).send("error in delete post");
    }
};