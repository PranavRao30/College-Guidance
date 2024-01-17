require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');
    console.log(token);

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token.replace('Bearer ', ''), process.env.SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden' });
        }

        req.user = user;
        next();
    });
};

router.get('/user-details', authenticateToken, (req, res) => {
    const token = req.header('Authorization');
    const decodedToken = jwt.decode(token.replace('Bearer ', ''), { complete: true });
    const payload = decodedToken.payload;
    console.log(payload);

    res.json(payload);
});

module.exports = router;
