import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import { User } from "../models/users.js";

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password || !name) {
    res.status(400);
    throw new Error("Please Include Input Fields ");
  }
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User already exist");
  }

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  res.status(200).json(std);
});

const getUser = asyncHandler(async (req, res) => {
  const std = await User.find({});
  res.status(200).json(std);
});

const loginUser = asyncHandler(async (req, res) => {
  const std = await User.findById(req.params.id);
  if (!std) {
    res.status(400);
    throw new Error("User not Found");
  }
  await std.remove();
  res.status(200).json(req.params.id);
});

export { getUser, registerUser, loginUser };
