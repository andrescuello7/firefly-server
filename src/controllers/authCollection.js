const User = require("../models/user");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

//Metodo para ver datos del Usuario
exports.Get = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json({ user });
  } catch (error) {
    console.log(error);
    res.status(400).send("error in create of user");
  }
};

//Metodo para iniciar sesion
exports.Post = async (req, res) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ msg: errores.array() });
  }
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "user does not exist" });
    }
    const PassCorrect = await bcrypt.compare(password, user.password);
    if (!PassCorrect) {
      return res.status(400).json({ msg: "password incorrect" });
    }
    const payload = {
        user: {
        id: user.id,
      },
    };
    jwt.sign(
      payload,
      process.env.SECRETA,
      (error, token) => {
        if (error) {
          throw error;
        }
        res.send(token);
      }
    );
  } catch (error) {
    console.log(error);
    res.status(400).send("error in create of user");
  }
};