require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const GM = require('../jsonFiles/GMCutoffSorted.json');
const OG = require('../jsonFiles/1G Cutoff.json');
const OK = require('../jsonFiles/1K Cutoff.json');
const OR = require('../jsonFiles/1R Cutoff.json');
const TAG = require('../jsonFiles/2AGCutoff.json');
const TAK = require('../jsonFiles/2AKCutoff.json');
const TAR = require('../jsonFiles/2ARCutoff.json');
const TBG = require('../jsonFiles/2BGCutoff.json');
const TBR = require('../jsonFiles/2BRCutoff.json');
const ThAG = require('../jsonFiles/3AGCutoff.json');
const ThAK = require('../jsonFiles/3AKCutoff.json');
const ThAR = require('../jsonFiles/3ARCutoff.json');
const ThBG = require('../jsonFiles/3BGCutoff.json');
const ThBK = require('../jsonFiles/3BKCutoff.json');
const ThBR = require('../jsonFiles/3BRCutoff.json');
const GMK = require('../jsonFiles/GMKCutoff.json');
const GMR = require('../jsonFiles/GMRCutoff.json');
const SCG = require('../jsonFiles/SCGCutoff.json');
const SCK = require('../jsonFiles/SCKCutoff.json');
const SCR = require('../jsonFiles/SCRCutoff.json');
const STG = require('../jsonFiles/STGCutoff.json');
const STK = require('../jsonFiles/STKCutoff.json');
const STR = require('../jsonFiles/STRCutoff.json');
const collegeCodes = require('../jsonFiles/CollegeCodesFinal.json');

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

router.post('/getCollege', (req, res) => {
    const form = req.body.input;
    console.log(JSON.stringify(form));
    const rank = form.num;
    const cat = form.cat;
    console.log(rank, cat);
    const CategoryMap = {
        "GM": GM,
        "GMR": GMR,
        "1G": OG,
        "1R": OR,
        "1K": OK,
        "2AG": TAG,
        "2AK": TAK,
        "2AR": TAR,
        "2BG": TBG,
        "2BR": TBR,
        "3AG": ThAG,
        "3AK": ThAK,
        "3AR": ThAR,
        "3BG": ThBG,
        "3BK": ThBK,
        "3BR": ThBR,
        "GMK": GMK,
        "SCG": SCG,
        "SCK": SCK,
        "SCR": SCR,
        "STG": STG,
        "STK": STK,
        "STR": STR
    }
    let ranks = Object.keys(CategoryMap[cat]);
    const len = ranks.length;
    let i;
    for (i = 0; i < len; i++) {
        if (CategoryMap[cat][ranks[i]] >= rank) {
            break;
        }
    }
    let lst = [];
    let k = 0;
    for (let j = i - 3; j < i + 7; j++) {
        if (j >= 0 && j < len) {
            let code = ranks[j].substring(0, 4);
            const collegeDecided = collegeCodes[code];
            let s = [CategoryMap[cat][ranks[j]], ranks[j].substring(4), collegeDecided];
            lst[k] = s;
            k++;
        }
    }
    console.log(lst);
    res.send(lst);
});

module.exports = router;
