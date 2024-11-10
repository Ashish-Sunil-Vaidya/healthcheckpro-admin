import mongoose from "mongoose";


export let otpStore = {}; // temporary store for OTPs
export let verifiedEmails = {}; // temporary store for verified mails


const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  username: {
    type: String,
    default: "username",
    trim: true,
    min: 2,
    max: 50,
  },
  password: {
    type: String,
    default: "password",
    required: true,
  }
}, { timestamps: true });



const User = mongoose.model("users", userSchema);

export default User;
