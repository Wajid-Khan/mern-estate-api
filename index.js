import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();

mongoose.connect(process.env.MONGO);
const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

//api 
app.use("/api/user", userRouter);

//sign up appi
app.use("/api/auth", authRouter);
