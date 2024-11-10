import generateToken from "../helpers/generateToken.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import User from "../models/user.model.js";


const createAccount = async (req, res) => {
  try {
    const { email, password, username, confirmPassword } = req.body;

    if (!email || !password || !username) {
      throw new Error("Please fill all the fields");
    }

    if (!validator.isEmail(email)) {
      throw new Error("Email is not valid. Please enter a valid email");
    }

    if (password !== confirmPassword) {
      throw new Error("Passwords do not match");
    }

    if (!validator.isStrongPassword(password)) {
      throw new Error("Password is not strong enough.\nMust contain at least: \n8 characters \n1 uppercase \n1 lowercase \n1 number  \n1 symbol");
    }

    const genSalt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, genSalt);

    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    })

    user.save();

    const token = generateToken(user._id);
    return res.status(201).json({
      token,
      email,
      username,
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Please fill all the fields");
    }

    if (!validator.isEmail(email)) {
      throw new Error("Email is not valid");
    }

    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("User does not exist");
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      throw new Error("Wrong password");
    }

    const token = generateToken(user._id);
    res.status(201).json({
      token,
      username: user.username,
      email,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};




export {
  createAccount,
  loginUser,

};
