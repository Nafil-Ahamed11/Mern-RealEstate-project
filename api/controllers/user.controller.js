import User from "../models/user-model.js";
import { errorHandler } from "../utils/error.js";
import bcrypt from "bcrypt";

export const test = (req, res) => {
  res.json({
    message: "Api testing..",
  });
};

export const updateUser = async (req, res, next) => {
  console.log("Entered updateUser function");

  if (req.user.id !== req.params.id) {
    console.log("User ID mismatch");
    return next(errorHandler(401, "You can only update your own account!"));
  }

  try {
    if (req.body.password) {
      console.log("Hashing password");
      req.body.password = bcrypt.hashSync(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );

    console.log("User updated", updatedUser);

    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    console.log("Error in updateUser:", error);
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "You can delete your own account "));
  try {
    await User.findByIdAndDelete(req.params.id)
    res.clearCookie('access_token');
    res.status(200).json('User has been deleted !')
  } catch (error) {
    next(error)
  }
};



