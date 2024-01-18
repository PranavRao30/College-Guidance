require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const cutoffs = require('../GMCutoffSorted.json');
const collegeCodes = require('../CollegeCodesFinal.json');

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

router.post('/getCollege', (req,res) => {
    const rank = req.body.num;
    console.log(rank);
    const ranks = Object.keys(cutoffs);
    const len = ranks.length;
    let i;
    for(i = 0; i < len; i++){
        if(cutoffs[ranks[i]] >= rank){
            break;
        }
    }
    let lst = [];
    let k = 0;
    for(let j = i - 3; j < i + 7; j++){
        if(j >= 0 && j < len){
            let code = ranks[j].substring(0,4);
            const collegeDecided = collegeCodes[code];
            let s = cutoffs[ranks[j]] + " -> " + ranks[j].substring(4) + " -> " + collegeDecided;
            lst[k] = s;
            k++;
        }
    }
    console.log(lst);
    res.send(lst);
});

module.exports = router;
