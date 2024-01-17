require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
const port = 3000;
const allowedOrigins = ['http://localhost:5173'];

app.use(cors({
    origin: allowedOrigins,
    credentials: true
  }));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(cookieParser());

mongoose.connect('//enter database url');

app.use("/auth", authRoutes);

app.use("/api", apiRoutes);


app.listen(port, (req, res) => {
    console.log(`Server up and running on port ${port}`)
});





