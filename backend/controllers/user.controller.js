const User = require("./../models/user.model.js");
const connectDB = require("../utils/db");

// Get all users
async function allUsers(req, res) {
  try {
    await connectDB();
    let users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// Get user by SIC, Email, or Mobile
async function getUserByQuery(req, res) {
  try {
    await connectDB();
    let { query } = req.params;
    let user = await User.findOne({
      $or: [{ sic: query }, { email: query }, { mobile: query }],
    });

    if (user) {
      res.send(user);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// Add new user
async function addUser(req, res) {
  try {
    await connectDB();
    let newUser = req.body;
    let user = await User.create(newUser);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// Update user by SIC
async function updateUser(req, res) {
  try {
    await connectDB();
    let user = req.body;
    let { sic } = req.params;
    let updatedUser = await User.findOneAndUpdate({ sic: sic }, user, {
      new: true,
    });

    if (updatedUser) {
      res.status(200).send(updatedUser);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// Delete user by SIC
async function deleteUser(req, res) {
  try {
    await connectDB();
    let { sic } = req.params;
    let user = await User.findOneAndDelete({ sic: sic });

    if (user) {
      res.status(200).send(user);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
}

module.exports = {
  allUsers,
  getUserByQuery,
  addUser,
  updateUser,
  deleteUser,
};
