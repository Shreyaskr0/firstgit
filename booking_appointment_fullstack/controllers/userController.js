const User = require("../models/User");


exports.addUser = async (req, res) => {
    try {
        const { username, email, phone } = req.body;

        if (!username || !email || !phone) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newUser = await User.create({ username, email, phone });
        res.status(201).json({ message: "User added successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Error adding user", error });
    }
};


exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
    }
};


exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        await user.destroy();
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting user", error });
    }
};


exports.editUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { username, email, phone } = req.body;

        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.username = username;
        user.email = email;
        user.phone = phone;

        await user.save();
        res.json({ message: "User updated successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error });
    }
};
