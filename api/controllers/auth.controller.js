import User from '../models/user-model.js';
import bcrypt from 'bcrypt';
import {errorHandler} from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
    console.log("entered signup function");
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'Email is already used' });
        }

        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
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


export const signin = async (req,res,next)=>{
    const {email,password} = req.body;
    console.log("enterd sigin in function");

    try {
        const validUser =  await User.findOne({email});
        if(!validUser) return next(errorHandler(404, 'User not found !'));
        const validPassword = bcrypt.compareSync(password, validUser.password);
        if(!validPassword) return next(errorHandler(401,'Worng Credentials! '));
        const token = jwt.sign({id : validUser._id}, process.env.JWT_SECRET);
        const {password:pass,...rest} = validUser._doc;
        res.cookie('access_token',token,{httpOnly:true})
        .status(200)
        .json(rest)
    } catch (error) {
        next(error);
    }
}


