const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get('/register', (req, res) => {
    res.render('register.ejs');
})

router.post('/register',
    body('email').trim().isEmail().isLength({ min: 13}).withMessage('Please enter a valid email'),
    body('password').trim().isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
    body('username').trim().isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
    async (req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array(), message: 'Invalid data' });
    }
    const {email, username, password} = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({email, username, password:hashPassword});
    res.json(newUser);
})

router.get('/login', (req, res) => {
    res.render('login.ejs');
})

router.post('/login',
    body('username').trim().isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
    body('password').trim().isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array(), message: 'Invalid data' });
        }
    const {username, password} = req.body;
    const user = await userModel.findOne({username});
    if(!user){
        return res.status(400).json({message: 'Invalid credentials'});
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res.status(400).json({message: 'Invalid credentials'});
    }
    // res.json({message: 'User logged in successfully'});
    const token = jwt.sign({
        userId: user._id,
        username: user.username
    }, process.env.JWT_SECRET, {
        expiresIn: '1h'
    })
    res.cookie('token', token, { httpOnly: true });
    res.json({message: 'User logged in successfully'});
})

module.exports = router;