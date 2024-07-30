const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const cors = require('cors');
const connectDB = require('./config/db');

const corsOptions = {
    origin:'http://localhost:5173',
    methods:'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus:204,
}

app.use(express.json());
app.use(cors(corsOptions));

connectDB();
const PORT = process.env.PORT||5000;
app.listen(PORT,()=>console.log(`Server running on port ${5000}`));