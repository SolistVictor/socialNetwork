const { Router } = require('express');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator')
const User = require('../models/User.js');
const router = Router();


// /api/auth/register
router.post(
    '/register',
    [
        check('email', 'Incorrect email').isEmail(),
        check('password', 'Length of password must be minimum 4 symbols').isLength({ min: 4 })

    ],
    async (request, responce) => {
        try {
            const errors = validationResult(request);
            if (!errors.isEmpty()) {
                return responce.status(400).json({
                    errors: errors.array(),
                    message: 'Incorrect users data on registration'
                })
            }

            const { name, email, password } = request.body;

            const newUser = await User.findOne({ name: name });

            if (newUser) {
                return responce.status(400).json({ message: 'this user already has' });
            }

            const hashedPassword = await bcrypt.hash(password, 12);
            const user = new User({ name, email, password: hashedPassword });
            await user.save();

            responce.status(201).json({ message: 'User has been created' });

        }
        catch (e) {
            responce.status(500).json({ message: 'something wrong' });
        }
    })

// /api/auth/login
router.post('/login',
    [
        check('email', 'Input correct email').normalizeEmail().isEmail(),
        check ('password', 'Input Password').exists()
    ],
    async (request, responce) => {
        try {
            const errors = validationResult(request);
            if (!errors.isEmpty()) {
                return responce.status(400).json({
                    errors: errors.array(),
                    message: 'Incorrect users data to login'
                })
            }

            const {name, email, password} = request.body;
            
            const user = await User.findOne({name});
            if (!user) {
                return responce.status(400).json({ message: 'This user is not found'})
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return responce.status(400).json({ message: 'Incorrect password, try again'})
            }

            const token = jwt.sign( // create token
                { userId: user.id},
                config.get('jwtSecret'), // передаем секретный ключ через конфиг
                { expiresIn: '1h'} //через сколько токен прекратит свое существование
            )

            responce.json({ token, userId: user.id});

        }
        catch (e) {
            responce.status(500).json({ message: 'something wrong' });
        }
    })



module.exports = router;