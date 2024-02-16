require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const apiRoutes = require('./routes/apiRoutes');
const mongopass = process.env.MONGOPASS
const mongousername = process.env.MONGOUSERNAME
const mongouri = `mongodb+srv://${mongousername}:${mongopass}@cluster0.vf2btw4.mongodb.net/?retryWrites=true&w=majority`

const app = express();
const port = process.env.PORT || 3000;
const allowedOrigins = ['http://localhost:5173', 'https://collegeguidance.netlify.app'];

app.use(cors({
    origin: allowedOrigins,
    credentials: true
  }));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(cookieParser());

mongoose.connect(mongouri, {dbName: 'College-Guidance'});

app.use("/auth", authRoutes);

app.use("/api", apiRoutes);


app.listen(port, (req, res) => {
    console.log(`Server up and running on port ${port}`)
});





