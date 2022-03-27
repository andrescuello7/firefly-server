const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.Post = async (req, res) => {
    const { email, password } = req.body;
    const validation = await User.findOne({ email });
    try {
        if (validation) {
            return res.status(400).send("error in validation of email");
        }
        const salt = await bcrypt.genSalt(10);
        const encrypt = await bcrypt.hash(password, salt);
        const user = new User({
            ...req.body,
            password: encrypt,
            CreateAdd: Date.now(),
        });
        await user.save();
        const payload = {
            user: {
                id: user.id,
            },
        };
        jwt.sign(
            payload,
            process.env.SECRETA,
            {
                expiresIn: 3600,
            },
            (error, token) => {
                if (error) {
                    throw error;
                }
                res.send(token);
            }
        );
    } catch (error) {
        console.log(error);
        res.status(400).send("error in create user");
    }
};

//Metodo para ver usuarios
exports.Users = async (req, res) => {
    try {
        const DataBaseOfHome = await User.find();
        res.send(DataBaseOfHome);
    } catch (error) {
        console.log(error);
        res.status(400).send("error in methhod of read");
    }
};

//Metodo para modificar datos de usuario

exports.Put = async (req, res) => {
    const { idUser } = req.params;
    try {
        const actualizar = await User.findOneAndUpdate({ _id: idUser }, req.body, { new: true });
        res.send(actualizar)
    } catch (error) {
        console.log(error);
        res.status(400).send("error in update of user");
    }
};