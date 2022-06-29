const Calendar = require("../models/calendar");

//Method get | read Calendar
exports.CalendarGet = async (req, res) => {
    try {
        const response = await Calendar.find();
        res.status(200).send(response);
    } catch (error) {
        console.log(error);
        res.status(400).send("error in read calendar");
    }
};

//Method delete | delete Calendar
exports.CalendarPost = async (req, res) => {
    try {
        const postJobs = new Calendar({
            ...req.body,
            createBy: req.user.id,
            CreateAdd: Date.now(),
        });
        const response = await postJobs.save();
        res.status(200).send(response);
    } catch (error) {
        console.log(error);
        res.status(400).send("error in write calendar");
    }
};

//Metodo para modificar datos de Calendar
exports.CalendarPut = async (req, res) => {
    const { idDate } = req.params;
    try {
        const response = await Calendar.findOneAndUpdate({ _id: idDate }, req.body, { new: true });
        res.status(200).send(response);
    } catch (error) {
        console.log(error);
        res.status(400).send("error in update of calendar");
    }
};

//Method post | create Calendar
exports.CalendarDelete = async (req, res) => {
    const { idDelete } = req.params;
    try {
        const deletePost = await Calendar.findById(idDelete);
        const response = await deletePost.remove();
        res.status(200).send(response);
    } catch (error) {
        console.log(error);
        res.status(400).send("error in delete calendar");
    }
};