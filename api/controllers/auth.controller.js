import User from '../models/user-model.js';
import bcrypt from 'bcrypt';

export const signup = async (req, res, next) => {
    console.log("entered signup function");
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'Email is already used' });
        }

        // Hash the password
        const hashedPassword = bcrypt.hashSync(password, 10);

        // Create a new user instance
        const newUser = new User({ username, email, password: hashedPassword });

        // Save the user to the database
        await newUser.save();
        res.status(201).json({ success: true, message: 'User created successfully' });
    } catch (error) {
        if (error.code === 11000) {
            // Duplicate key error
            const field = Object.keys(error.keyPattern)[0];
            return res.status(400).json({ success: false, message: `${field} is already used` });
        }
        next(error);
    }
};
