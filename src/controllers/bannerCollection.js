const Banner = require("../models/banner");

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